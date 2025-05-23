export const emailHTML = `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Apresentação - Felipe</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            background-color: #fff;
            margin: 0;
            padding: 0;
            color: #000;
        }
        .container {
            max-width: 600px;
            background-color: #fff;
            margin: 20px auto;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }
        h1 {
            text-align: center;
            color: #F07A05;
            font-size: 28px;
            margin-bottom: 20px;
        }
        p {
            font-size: 16px;
            line-height: 1.6;
            color: #000;
        }
        .skills {
            margin-top: 20px;
        }
        .skills h2 {
            color: #F07A05;
            font-size: 20px;
            margin-bottom: 10px;
        }
        .skills ul {
            list-style-type: none;
            padding: 0;
        }
        .skills li {
            background-color: #F07A05;
            color: #fff;
            margin: 5px 0;
            padding: 10px;
            border-radius: 5px;
            font-size: 16px;
        }
        .footer {
            text-align: center;
            margin-top: 30px;
            font-size: 14px;
            color: #000;
        }
        .footer a {
            color: #F07A05;
            text-decoration: none;
        }
        .btn {
            display: inline-block;
            margin-top: 20px;
            background-color: #F07A05;
            color: white;
            padding: 10px 20px;
            border-radius: 5px;
            text-decoration: none;
            font-weight: bold;
            transition: background-color 0.3s ease;
        }
        .btn:hover {
            background-color: #d96b03;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Olá! Seja Bem-vindo(a)!</h1>
        <p>Eu sou o <strong>Felipe</strong>, tenho 19 anos e sou completamente apaixonado por tecnologia. Atualmente, estou cursando <strong>Engenharia de Software</strong> na FAMETRO e complementando minha formação com um curso livre pela EBAC, focado no desenvolvimento Full Stack.</p>
        <p>Trabalho com uma variedade de tecnologias, sempre buscando criar soluções inovadoras tanto no <strong>Frontend</strong> quanto no <strong>Backend</strong>.</p>

        <div class="skills">
            <h2>Minhas Habilidades no Frontend</h2>
            <ul>
                <li>React</li>
                <li>Redux & Redux Toolkit</li>
                <li>Styled-components</li>
                <li>React Router DOM</li>
            </ul>

            <h2>Minhas Habilidades no Backend</h2>
            <ul>
                <li>Node.js</li>
                <li>MySQL & MongoDB</li>
                <li>Sequelize & Express</li>
                <li>Passport & JWT (JSON Web Tokens)</li>
                <li>Desenvolvimento de APIs RESTful</li>
            </ul>
        </div>

        <p>Eu gosto de criar sistemas que sejam eficientes e fáceis de usar, tanto no lado do cliente quanto no servidor. Se você estiver interessado(a) em colaborar, discutir ideias ou conhecer mais sobre meu trabalho, ficarei feliz em ouvir você!</p>

        <a href="https://meu-portifolio-coral.vercel.app/" class="btn">Visite meu Portfólio</a>

        <div class="footer">
            <p>Obrigado por dedicar seu tempo! Fique à vontade para visitar meu portfólio: <a href="https://meu-portifolio-coral.vercel.app/">https://meu-portifolio-coral.vercel.app/</a></p>
        </div>
    </div>
</body>
</html>
`;