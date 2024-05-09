export default function guardrail(mathFunction) {
  const queue = [];
  try {
    const result = mathFunction();
    queue.push(result);
  } catch (e) {
    queue.push(e.message);
  } finally {
    queue.push('Guardrail was processe');
  }
  return queue;
}
