 console.log("Feito por Natan rcs");
        
        const menuBtn = document.getElementById("menuBtn");
        const menuMobiles = document.getElementById("menuMobiles");
        
        // Lógica para abrir/fechar o menu móvel
        menuBtn.addEventListener("click", () => {
            menuMobiles.classList.toggle("active");
            
            // Adicionado toggle da classe 'active' no botão para acessibilidade/efeitos visuais
            menuBtn.classList.toggle("active"); 
            
            // Adicionado lógica para fechar o menu ao clicar em um link (boa prática)
            const links = menuMobiles.querySelectorAll('a');
            links.forEach(link => {
                link.addEventListener('click', () => {
                    menuMobiles.classList.remove("active");
                    menuBtn.classList.remove("active");
                });
            });
        });

        // Lógica para o carrossel de imagens
        const imagens = document.querySelectorAll(".conteiner div");
        let index = 0; // Usar 'index' no lugar de 'mover' para clareza
        
        function mudarDiv() {
            // Remove a classe 'active' de todas as divs
            imagens.forEach(img => img.classList.remove("active"));
            
            // Adiciona a classe 'active' à div atual (index)
            imagens[index].classList.add("active");
            
            // Incrementa o índice para a próxima iteração
            index++;
            
            // Se o índice for igual ou maior que o número de imagens, ele volta para 0
            if (index >= imagens.length) {
                index = 0;
            }
        }
        
        // Inicia o carrossel na primeira imagem
        mudarDiv(); 
        
        // Define o intervalo para a função
        setInterval(mudarDiv, 3500);

        // Opcional: Adiciona a funcionalidade de clicar na imagem para ativá-la imediatamente
        imagens.forEach((div, i) => {
            div.addEventListener('click', () => {
                imagens.forEach(img => img.classList.remove("active"));
                div.classList.add("active");
                index = i; // Sincroniza o índice do carrossel com a imagem clicada
            });
        });



