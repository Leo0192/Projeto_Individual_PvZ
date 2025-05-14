-- criando o banco de dados
create database PIindividual;

-- colocando o banco de dados em uso
use PIindividual;

-- criando a tabela usuário
create table Usuario(
id int primary key auto_increment not null,
Nome varchar (60) not null, -- armazena o nome real do usuario
nome_usuario varchar (40) not null, --  armazena o nome de usuarioa de quem está utilizando
e_mail varchar (50) not null, -- armazena o email utilizado
senha varchar (20) not null, -- armazena a senha do usuário
telefone char (14) not null -- armazena o telefone do usuário parapossível recuperação de senha (opcional)
);

-- criando a tabela Inforamções pessoais
create table Informações_pessoais(
idUsuario int primary key auto_increment not null, -- referência o o id da tabela Usuario
Nome_completo varchar (100), -- armazena o nome completo do usuário
sexo_origem char (9), -- armazena o seo de origem do Usuário
idade int, --  armazena a idade do usuário
País varchar (25), -- registra o seu país de origem
foreign key (idUsuario) references Usuario (id), -- adicionando uma foreign key na coluna idUsuario
check (sexo_origem in('masculino','feminino')) -- adicionando uma checagem na coluna sexo para: masculino e feminino
);

-- craindo a tabela Forum onde seram armazenadas as mensagens dos usuários a fim de organizar e manter um certo monitoramento na conversa
create table Forum (
idUsuario int primary key auto_increment not null,
histórico_mensagem varchar (1000), -- armazena as mensagens de cada usuário  enviadas no fórum
status char (7), -- adicionando o status da conta do usuário para ativo (caso tenha logado em até um mês) ou inativo
check (status in ('ativo','inativo')) --  adiconando a checagem na coluna status do usuário
);