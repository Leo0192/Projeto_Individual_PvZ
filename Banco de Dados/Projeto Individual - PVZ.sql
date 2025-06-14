-- criando o banco de dados
	create database if not exists PIindividual;
    
-- drop database PIindividual;
	-- colocando o banco de dados em uso
	use PIindividual;

	-- criando a tabela usuário
	create table if not exists usuario(
	id int primary key auto_increment not null,
	nome_usuario varchar (40) not null, --  armazena o nome de usuarioa de quem está utilizando
	email varchar (50) not null, -- armazena o email utilizado
	senha varchar (20) not null -- armazena a senha do usuário
	);

-- criando a tabela do quiz

create table if not exists Quiz(
id int primary key auto_increment,
nome varchar (50),
categoria varchar (20),
qtdPerguntas int
);

create table if not exists usuarioQuiz(
id int auto_increment primary key,
fkQuiz int,
fkUsuario int,
pontuacao int,
data datetime,
foreign key (fkQuiz) references Quiz(id),
foreign key (fkUsuario) references usuario(id)
);

-- um usuário pode fazer o quiz 1 vez mas uma pergunta pode ter mais de uma resposta correta
-- Inserindo dados na tabela Usuario
  
INSERT INTO Quiz (nome, categoria, qtdPerguntas)
VALUES ('Plants vs Zombies', 'jogos', 10);


-- dados inseridos no commit anterior
  select* from usuario;
  
  select* from Quiz;
  
  select* from usuarioQuiz;
  
    
    select pontuacao as pontuacao from usuarioQuiz
    where fkUsuario = fkUsuario order by data desc limit 1;
    
    
    select pontuacao as pontuacao from usuarioQuiz
    where fkUsuario = fkUsuario order by pontuacao desc limit 1;

