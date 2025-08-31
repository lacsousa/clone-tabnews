function status(request, response) {
  response.status(200).json({ status: 'Os alunos do Curso.dev são acima da média' });
}

export default status;
