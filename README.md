# ANGULARJS
## Vantagens e explicações sobre o AngularJS
1. É uma Javascript Framework Client Side inteiramente.
2. Ele usa o padrão arquitetural MVC ( MODEL - VIEW - CONTROLLER ).
3. Possui fácil manutenção e uso de testes unitários dos códigos.
4. Usa Injeção de dependências para injetar dependências de componentes.
5. Ele herda do modelo HTML DOM ao adicionar atributos às tags HTML.
6. Permite desenhar ricas interfaces do lado client.
7. Usa versão minificada do jQuery( é uma biblioteca javascript de fácil uso e que traz muitos benefícios a linguagem javascript ), a jQlite em ordem a fim de modificar a árvore do HTML DOM.
8. É interessante utilizar o angular.min.js no ambiente de produção para que os scripts neste arquivo sejam minimizados usando compressão e não sejam lidos por pessoas.
9. Ele funciona em praticamente na maioria dos navegadores de internet.

#### SPA - Single Page Aplication
10. Ele permite criar uma aplicação Single Page ( SPA ). Baseada na criação de uma única página.
11. A aplicação pode mostrar em tela e re-renderizar partes dessa, sem precisar atualizar a página inteira.
12. Requisita ( request ) aos servidores que as chamadas sejam feitas através do Ajax e esses podem responder em XML, JSON ou HTML.

#### Two Way Data Binding
13. A sincronização entre o Model e a View, é feita pela framework, através do que é chamado de Two Way Data Binding.
14. Ele trata essa sincronização através das camadas MVC.
15. Quando o model muda, a view então reflete as mudanças e vice-versa.

#### Expressões
16. Elas são escritas com duas chaves: {{}}.
17. São avaliadas pelos navegadores através do escopo ( scope ) do objeto onde se guardam os objetos.
18. Elas podem trabalhar com arrays, números, objetos, funções e strings.
19. Examples: {{1+1}}, {{RosTec.nome}} e {{cursinho vestibular[0]}}

#### Módulos ( Module )
20. O AngularJS permite desenvolvimento modular, fazendo assim, que as camadas de negócio possam ser separadas.
21. A aplicação em AngularJS dá início ao definir um módulo Main ( Main Module ).
22. Eles podem ser definidos em diferentes arquivos JS.
23. Eles podem ser injetados em outros módulos.
24. Permitem que diferentes módulos sejam definidos como: controllers, services, filters, factories, directives e etc.
25. Para se importar um módulo, faz-se necessário o uso de <script src="exemplo.js"></script>

#### Controllers
