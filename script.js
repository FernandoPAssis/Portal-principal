
        // Lista de jogos fácil de expandir futuramente
        const jogos = [
            {
                titulo: "Jogo da Memória",
                descricao: "Encontre os pares de cartas no menor tempo possível! Vários níveis de desafio.",
                icone: "🧠",
                link: "https://fernandopassis.github.io/JogoMemoriaNiveis/JogoMemoriaNiveis.html"
            },
            {
                titulo: "Quebra-Cabeça Numérico",
                descricao: "Ordene as peças do menor para o maior número. Escolha entre níveis Fácil, Médio e Difícil.",
                icone: "🔢",
                link: "https://fernandopassis.github.io/Quebra-cabeca/quebracabeca.html"
            },
            {
                titulo: "Quebra-Cabeça de Letras",
                descricao: "Coloque o alfabeto em ordem correta deslizando as peças no tabuleiro.",
                icone: "🔤",
                link: "https://fernandopassis.github.io/Quebra-cabeca-letras/quebra_cabeca_letras.html"
            },

            {
                titulo: "Quebra-Cabeça de Imagens",
                descricao: "Coloque a imagem em ordem correta deslizando as peças no tabuleiro.",
                icone: "🧩",
                link: "https://fernandopassis.github.io/Quebra_cabeca_imagem/quebra_cabeca_imagens.html"
            },

            {
                titulo: "Monta Palavras",
                descricao: "Forme palavras usando as letras disponíveis no tabuleiro.",
                icone: "📝",
                link: "https://fernandopassis.github.io/MontaPalavras/monta_palavras.html"
            },

            {
                titulo: "Jogo da tabuada",
                descricao: "Resolva problemas de multiplicação e divisão na tabuada.",
                icone: "🧮",
                link: "https://fernandopassis.github.io/Tabuada/jogo_da_tabuada_divertida.html"
            },

            {
                titulo: "Tubo das cores",
                descricao: "Organize as bolinhas coloridas nos tubos até reunir todas as cores iguais no mesmo tubo!",
                icone: "🔵",
                link: "https://fernandopassis.github.io/Jogo_Tubo_bolinhas_Coloridas/Jogo_Tubo_Bolinhas_Coloridas.html"
            },

            {
                titulo: "Jogo de Xadrez",
                descricao: "Desafie a sua mente no tabuleiro de xadrez!",
                icone: "🐴",
                link: "https://fernandopassis.github.io/Jogo_Xadrez/xadrez.html"
            }

        ];

        // Renderiza os cards na página
        const container = document.getElementById('gamesContainer');

        jogos.forEach(jogo => {
            const card = document.createElement('article');
            card.className = 'game-card';

            card.innerHTML = `
            <div>
              <div class="card-icon">${jogo.icone}</div>
              <h2>${jogo.titulo}</h2>
              <p>${jogo.descricao}</p>
            </div>
            <a href="${jogo.link}" class="btn-play" target="_self">
              Jogar Agora 🚀
            </a>
          `;

            container.appendChild(card);
        });
