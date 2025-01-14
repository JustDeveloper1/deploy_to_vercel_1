export async function generateStaticParams() {
  const response = await fetch('https://api.juststudio.is-a.dev/cs');
  const codes = await response.json();
  
  return codes.map((code: { id: string }) => ({
    id: code.id.toString(),
  }));
}
