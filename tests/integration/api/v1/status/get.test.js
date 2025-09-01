test("GET to /api/v1/status returns 200 OK", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);
  const data = await response.json();
  expect(data).toEqual({ status: "Os alunos do Curso.dev são acima da média" });
});
