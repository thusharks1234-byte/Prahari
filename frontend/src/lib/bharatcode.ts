export const BHARATCODE_ENDPOINT = 'https://bharatcode.ai/api/model/v1/responses';
export const BHARATCODE_DEFAULT_MODEL = 'qwen-3.8-27b';

const DEFAULT_API_KEY = 'bc_live_48e67f0cd4b04d2a8f2e6146e3e87d2d_lHtE7Mwx3TG4JLsE3mW8SCG6CQN29ohuL_l36E0Qb1o';

/**
 * Executes a call to the BharatCode Responses API using qwen-3.8-27b.
 */
export async function generateBharatCodeContent(
  prompt: string,
  systemInstruction?: string,
  model = BHARATCODE_DEFAULT_MODEL
): Promise<string> {
  const apiKey = (
    import.meta.env.VITE_BHARATCODE_API_KEY ||
    import.meta.env.BHARATCODE_API_KEY ||
    DEFAULT_API_KEY
  )?.trim();

  if (!apiKey) {
    throw new Error('BharatCode API key is not configured.');
  }

  const combinedInput = systemInstruction ? `${systemInstruction}\n\n${prompt}` : prompt;

  const response = await fetch(BHARATCODE_ENDPOINT, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model,
      input: combinedInput,
      store: false,
    }),
  });

  if (!response.ok) {
    const errorBody = await response.text().catch(() => '');
    throw new Error(`BharatCode HTTP ${response.status}: ${errorBody || response.statusText}`);
  }

  const data = await response.json();
  const text =
    data.output_text ||
    data.output?.[0]?.content?.[0]?.text ||
    data.choices?.[0]?.message?.content ||
    (typeof data === 'string' ? data : '');

  return text;
}

/**
 * Executes BharatCode generation with retry logic.
 */
export async function generateBharatCodeContentWithRetry(
  prompt: string,
  systemInstruction?: string
): Promise<string> {
  const maxRetries = 2;
  let attempt = 0;
  let lastError: any = null;

  while (attempt <= maxRetries) {
    try {
      const result = await generateBharatCodeContent(prompt, systemInstruction);
      if (result) return result;
    } catch (err: any) {
      lastError = err;
      console.warn(`[BharatCode] ${BHARATCODE_DEFAULT_MODEL} failed on attempt ${attempt + 1}: ${err.message}`);

      // Retriable network or throttling errors
      if (
        err.message?.includes('429') ||
        err.message?.includes('503') ||
        err.message?.includes('timeout') ||
        err.message?.includes('network')
      ) {
        attempt++;
        if (attempt <= maxRetries) {
          const backoff = 1000 * Math.pow(2, attempt);
          await new Promise((r) => setTimeout(r, backoff));
          continue;
        }
      }
      break;
    }
  }

  throw lastError || new Error('BharatCode generation failed');
}
