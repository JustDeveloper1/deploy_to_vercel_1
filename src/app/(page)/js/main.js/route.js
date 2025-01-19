export async function GET(
  request
) {
  return new Response(`
    alert('This website is w.i.p.!');
  `, {
    status: 200,
  });
}
