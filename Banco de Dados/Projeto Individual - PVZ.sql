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
senha varchar (20) not null, -- armazena a senha do usuário
telefone char (14) not null -- armazena o telefone do usuário parapossível recuperação de senha (opcional)
);

-- criando a tabela Inforamções pessoais
create table if not exists Informações_pessoais(
idUsuario int primary key auto_increment not null, -- referência o o id da tabela Usuario
Nome_completo varchar (100), -- armazena o nome completo do usuário
sexo_origem char (9), -- armazena o seo de origem do Usuário
idade int, --  armazena a idade do usuário
País varchar (25), -- registra o seu país de origem
foreign key (idUsuario) references Usuario (id), -- adicionando uma foreign key na coluna idUsuario
check (sexo_origem in('masculino','feminino')) -- adicionando uma checagem na coluna sexo para: masculino e feminino
);

-- craindo a tabela Forum onde seram armazenadas as mensagens dos usuários a fim de organizar e manter um certo monitoramento na conversa
create table if not exists Forum (
idUsuario int primary key auto_increment not null,
histórico_mensagem varchar (1000), -- armazena as mensagens de cada usuário  enviadas no fórum
status char (7), -- adicionando o status da conta do usuário para ativo (caso tenha logado em até um mês) ou inativo
check (status in ('ativo','inativo')) --  adiconando a checagem na coluna status do usuário
);

CREATE TABLE if not exists aviso (
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
	titulo VARCHAR(100),
	descricao VARCHAR(150),
	fk_usuario INT,
	FOREIGN KEY (fk_usuario) REFERENCES Usuario(id)
);

-- Inserindo dados na tabela Usuario

INSERT INTO usuario (nome, nome_usuario, email, senha, telefone)
VALUES

  ('Maria Silva', 'mariasilva', 'maria.silva@email.com', 'senha123', '(11)91234-5678'),
  ('João Souza', 'joaosouza', 'joao.souza@email.com', 'senha456', '(21)99876-5432'),
  ('Ana Costa', 'anacosta', 'ana.costa@email.com', 'senha789', '(31)98765-4321');
  
 -- Inserindo dados na tabela Informações_Pessoais
  INSERT INTO Informações_pessoais (idUsuario, Nome_completo, sexo_origem, idade, País)
VALUES
  (1, 'Maria Aparecida da Silva', 'feminino', 28, 'Brasil'),
  (2, 'João Pedro de Souza', 'masculino', 35, 'Brasil'),
  (3, 'Ana Carolina Costa', 'feminino', 22, 'Brasil');
  
  -- Inserindo informações na tabela fórum
  
  INSERT INTO Forum (idUsuario, histórico_mensagem, status)
VALUES
  (1, 'Olá a todos! Estou animada para participar do fórum.', 'ativo'),
  (2, 'Bom dia, pessoal! Alguém mais teve problemas com o login?', 'ativo'),
  (3, 'Alguém pode me ajudar com a redefinição de senha?', 'inativo');

-- dados inseridos no commit anterior
  