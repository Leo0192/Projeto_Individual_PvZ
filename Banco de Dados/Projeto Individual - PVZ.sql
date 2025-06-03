-- criando o banco de dados
	create database if not exists PIindividual;

	-- colocando o banco de dados em uso
	use PIindividual;

	-- criando a tabela usuário
	create table if not exists usuario(
	id int primary key auto_increment not null,
	nome varchar (60) not null, -- armazena o nome real do usuario
	nome_usuario varchar (40) not null, --  armazena o nome de usuarioa de quem está utilizando
	email varchar (50) not null, -- armazena o email utilizado
	senha varchar (20) not null -- armazena a senha do usuário
	);

-- criando a tabela do quiz

create table if not exists Quiz(
id int primary key ,
PerguntaId int ,
RespostaCerta varchar(100) not null,
RespostaCerta2 varchar(100)
);

create table if not exists usuarioQuiz(
fkQuiz int,
fkUsuario int,
foreign key (fkQuiz) references Quiz(id),
foreign key (fkUsuario) references usuario(id),
primary key (fkUsuario, fkQuiz)
);

-- um usuário pode fazer o quiz 1 vez mas uma pergunta pode ter mais de uma resposta correta
-- Inserindo dados na tabela Usuario

INSERT INTO usuario (nome, nome_usuario, email, senha)
VALUES

  ('leo1231', 'leoqwdad1', 'leo@gmafagaail.com', 'senhasdafasa123'),
  ('João Souza', 'joaosouza', 'joao.souza@email.com', 'senha456'),
  ('Ana Costa', 'anacosta', 'ana.costa@email.com', 'senha789');
  
INSERT INTO Quiz (id, perguntaId, RespostaCerta, RespostaCerta2)
VALUES ();

INSERT INTO usuarioQuiz(fkQuiz,fkUsuario)
VALUES ();
  

-- dados inseridos no commit anterior
  select* from usuario;
  
  