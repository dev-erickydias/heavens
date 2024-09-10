### Squad QA: Eduardo
### Data de modificação: 13/08/2024


Feature: Heavens Hair pagina inicial

@passed
Scenario: Clicar no botão "HOME"
Given Acessar a pagina inicial Heavens Hair
When Selecionar "Cursos"
And Clicar no botão "HOME"
Then Usuário é redirecionado a página principal "HEAVENS HAIR"

@passed
Scenario: Clicar no botão "Cursos"
Given Acessar a página inicial HEAVENS HAIR
When Selecionar botão "Cursos"
Then  Usuário é direcionado para sessão Cursos

@failed
Scenario: Clicar no botão "Serviços"
Given Acessar a pagina inicial HEAVENS HAIR
When Selecionar botão "Serviços"
Then Usuário é direcionado para página que contém serviços 

@executed 
Scenario: Clicar no botão "serviço"
Given Acessar a página inicial HEAVENS HAIR
When Selecionar  botão "Serviços"
Then Usuário é direcionado para sessão "Saiba Mais"

@passed
Scenario: Clicar no botão "Contactos"
Given Acessar a página inicial HEAVENS HAIR
When Selecionar botão "Contactos"
Then Usuário é direcionado para sessão "Contactos"

@passed
Scenario: Clicar no botão "INSTAGRAM"
Given Acessar página inicial HEAVENS HAIR
When Selecionar botão "Contactos"
And Clicar no ícone "Instagram"
Then Usuário é direcionado para página "Instagram"


@failed
Scenario: Clicar no botão "FACEBOOK"
Given Acessar página inicial HEAVENS HAIR
When Selecionar botão "Contactos"
And Clicar no ícone "FACEBOOK"
Then Usuário é direcionado para página "FACEBOOK"

@passed
Scenario: Clicar no botão "E-MAIL"
Given Acessar página inicial HEAVENS HAIR
When Selecionar botão "Contactos"
And Clicar no ícone "E-MAIL"
Then Um pop-up com opções para abrir e-mail irá aparecer

@passed
Scenario: Clicar no botão "Agende Aqui"
Given Acessar página inicial HEAVENS HAIR
When Selecionar botão "Agende aqui"
Then Uma nova página é aberta "boas vindas" e serviços e valores aparecem






