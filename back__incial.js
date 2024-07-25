
document.addEventListener('DOMContentLoaded', function () {
    let openMenu = document.getElementById("open__menu")
    let closeMenu = document.getElementById("close__menu")
    let menu = document.getElementById("bt__menu")

    openMenu.addEventListener('click', () => {
        menu.style.display = 'flex'

        menu.style.right = (menu.offsetWidth * -1) + 'px'

        openMenu.style.display = 'none'

        setTimeout(() => {
            menu.style.opacity = '1'

            menu.style.right = '0'
        }, 10)
    })

    closeMenu.addEventListener('click', () => {
        menu.style.opacity = '0'

        menu.style.right = (menu.offsetWidth * -1) + 'px'

        openMenu.removeAttribute('style')

        setTimeout(() => {
            menu.removeAttribute('style')
        }, 200)
    })

        // Adiciona um event listener para os links do menu
        let links = document.querySelectorAll('.link__')
        links.forEach(link => {
            link.addEventListener('click', () => {
                menu.style.opacity = '0'
    
                menu.style.right = (menu.offsetWidth * -1) + 'px'
    
                openMenu.removeAttribute('style')
    
                setTimeout(() => {
                    menu.removeAttribute('style')
                }, 200)
            })
        })

        // Obtém a URL da página atual
        var urlAtual = window.location.href;

        // Obtém todos os links na página
        var links__menu = document.querySelectorAll('.link__');

        // Itera sobre os links
        for (var i = 0; i < links__menu.length; i++) {
            var link = links__menu[i];
            
            // Obtém o URL de destino do link
            var urlDestino = link.href;

            // Verifica se a URL de destino é igual à URL atual
            if (urlDestino === urlAtual) {
                // Se forem iguais, oculta o link
                link.style.display = 'none';
            }
        }

        // função de seleção de setor

        const unidades = document.querySelectorAll('.unidade');

        function mostrarUnidade(id) {
            unidades.forEach(unidade => {
                unidade.style.display = 'none';
            });
    
            const unidadeSelecionada = document.getElementById(id);
            unidadeSelecionada.style.display = 'block';
        }
    
        document.querySelectorAll('.link__menu').forEach(link => {
            link.addEventListener('click', function(event) {
                event.preventDefault();
                const id = this.getAttribute('href').substring(1);
                mostrarUnidade(id);

                const menu = document.querySelector('.inicial__menu');
                menu.style.display = 'none';
            });
        });
    
        // // Para exibir a primeira unidade ao carregar a página
        // mostrarUnidade('UA1'); // Altere para a unidade desejada
        
});

 let listaDeUrls = [];


const unidades = {
    //  { data: "", captura: ["", "", "", "", ""] },

    // Produtividade:
    
    UA1: {
        Expedicao: [
            { data: "30/11/2023", captura: ["capturas/Unidade 1/11- Novembro/Expedição/Embalagem/30.png", "capturas/Unidade 1/11- Novembro/Expedição/MetasTv/30.png"] },
                                            
            { data: "20/12/2023", captura: ["capturas/Unidade 1/12- Dezembro/Expedição/Embalagem/20.png", "capturas/Unidade 1/12- Dezembro/Expedição/MetasTv/20.png"] },

            { data: "31/01/2024", captura: ["capturas/Unidade 1/2024/1- Janeiro/Expedição/Embalagem/31.png", "capturas/Unidade 1/2024/1- Janeiro/Expedição/MetasTv/31.png"] },

            { data: "29/02/2024", captura: ["capturas/Unidade 1/2024/2- Fevereiro/Expedição/Embalagem/29.png", "capturas/Unidade 1/2024/2- Fevereiro/Expedição/MetasTv/29.png"] },

            { data: "30/03/2024", captura: ["capturas/Unidade 1/2024/3- Março/Expedição/Embalagem/30.jpg", "capturas/Unidade 1/2024/3- Março/Expedição/MetasTv/28.jpg"] },

            { data: "30/04/2024", captura: ["capturas/Unidade 1/2024/4- Abril/Expedição/Embalagem/30.jpeg", "capturas/Unidade 1/2024/4- Abril/Expedição/MetasTv/30.jpeg"] },

            { data: "30/05/2024", captura: ["capturas/Unidade 1/2024/5- Maio/Expedição/Embalagem/30.jpg", "capturas/Unidade 1/2024/5- Maio/Expedição/MetasTv/30.jpg"] },

            { data: "28/06/2024", captura: ["capturas/Unidade 1/2024/6- Junho/Expedição/Embalagem/29.jpg", "capturas/Unidade 1/2024/6- Junho/Expedição/MetasTv/28.jpg"] },
            
            { data: "01/06/2024", captura: ["capturas/Unidade 1/2024/7- Julho/Expedição/Embalagem/1.jpg", "capturas/Unidade 1/2024/7- Julho/Expedição/MetasTv/1.jpg"] },
            { data: "04/07/2024", captura: ["capturas/Unidade 1/2024/7- Julho/Expedição/Embalagem/4.jpg", "capturas/Unidade 1/2024/7- Julho/Expedição/MetasTv/4.jpg"] },
            { data: "08/07/2024", captura: ["capturas/Unidade 1/2024/7- Julho/Expedição/Embalagem/8.jpg", "capturas/Unidade 1/2024/7- Julho/Expedição/MetasTv/8.jpg"] },
            { data: "15/07/2024", captura: ["capturas/Unidade 1/2024/7- Julho/Expedição/Embalagem/15.jpg", "capturas/Unidade 1/2024/7- Julho/Expedição/MetasTv/15.jpg"] },
            { data: "17/07/2024", captura: ["capturas/Unidade 1/2024/7- Julho/Expedição/Embalagem/17.jpg", "capturas/Unidade 1/2024/7- Julho/Expedição/MetasTv/17.jpg"] },
            { data: "22/07/2024", captura: ["capturas/Unidade 1/2024/7- Julho/Expedição/Embalagem/22.jpg", "capturas/Unidade 1/2024/7- Julho/Expedição/MetasTv/22.jpg"] },


            // { data: "", captura: ["", ""] },
            // { data: "", captura: ["", ""] },
        ],

        Acabamento: [
            { data: "30/11/2023", captura: ["capturas/Unidade 1/11- Novembro/LixaçãoMetal/30.png", "capturas/Unidade 1/11- Novembro/QuadroQuadroMetas/30.jpeg"] },
                                            
            { data: "20/12/2023", captura: ["capturas/Unidade 1/12- Dezembro/LixaçãoMetal/20.png", "capturas/Unidade 1/12- Dezembro/QuadroQuadroMetas/19.jpeg"] },

            { data: "31/01/2024", captura: ["capturas/Unidade 1/2024/1- Janeiro/LixaçãoMetal/31.png", "capturas/Unidade 1/2024/1- Janeiro/QuadroMetas/31.jpg"] },

            { data: "29/02/2024", captura: ["capturas/Unidade 1/2024/2- Fevereiro/LixaçãoMetal/29.png", "capturas/Unidade 1/2024/2- Fevereiro/LixaçãoOsso/28.png"] },

            { data: "28/03/2024", captura: ["capturas/Unidade 1/2024/3- Março/LixaçãoMetal/28.jpg", "capturas/Unidade 1/2024/3-Março/LixaçãoOsso/28.jpg", "capturas/Unidade 1/2024/3- Março/QuadroMetas/28.png"] },

            { data: "30/04/2024", captura: ["capturas/Unidade 1/2024/4- Abril/LixaçãoMetal/30.jpeg", "capturas/Unidade 1/2024/4- Abril/LixaçãoOsso/30.jpeg", "capturas/Unidade 1/2024/4- Abril/QuadroMetas/18.png"] },
            
            { data: "30/05/2024", captura: ["capturas/Unidade 1/2024/5- Maio/LixaçãoMetal/30.jpg", "capturas/Unidade 1/2024/5- Maio/LixaçãoOsso/30.jpg", "capturas/Unidade 1/2024/5- Maio/QuadroMetas/30.png"] },

            { data: "28/06/2024", captura: ["capturas/Unidade 1/2024/6- Junho/LixaçãoMetal/28.jpg", "capturas/Unidade 1/2024/6- Junho/LixaçãoOsso/28.jpg", "capturas/Unidade 1/2024/6- Junho/QuadroMetas/27.png"] },

            { data: "01/07/2024", captura: ["capturas/Unidade 1/2024/7- Julho/LixaçãoMetal/1.jpg", "capturas/Unidade 1/2024/7- Julho/LixaçãoOsso/1.jpg", "capturas/Unidade 1/2024/7- Julho/QuadroMetas/1.png"] },
            { data: "02/07/2024", captura: ["capturas/Unidade 1/2024/7- Julho/LixaçãoMetal/2.jpg", "capturas/Unidade 1/2024/7- Julho/LixaçãoOsso/2.jpg"] },
            { data: "04/07/2024", captura: ["capturas/Unidade 1/2024/7- Julho/LixaçãoMetal/4.jpg", "capturas/Unidade 1/2024/7- Julho/LixaçãoOsso/4.jpg", "capturas/Unidade 1/2024/7- Julho/QuadroMetas/4.png"] },
            { data: "08/07/2024", captura: ["capturas/Unidade 1/2024/7- Julho/LixaçãoMetal/8.jpg", "capturas/Unidade 1/2024/7- Julho/LixaçãoOsso/8.jpg", "capturas/Unidade 1/2024/7- Julho/QuadroMetas/8.png"] },
            { data: "15/07/2024", captura: ["capturas/Unidade 1/2024/7- Julho/LixaçãoMetal/15.jpg", "capturas/Unidade 1/2024/7- Julho/LixaçãoOsso/15.jpg", "capturas/Unidade 1/2024/7- Julho/QuadroMetas/15.png"] },
            { data: "17/07/2024", captura: ["capturas/Unidade 1/2024/7- Julho/LixaçãoMetal/17.jpg", "capturas/Unidade 1/2024/7- Julho/LixaçãoOsso/17.jpg"] },
            { data: "19/07/2024", captura: ["capturas/Unidade 1/2024/7- Julho/LixaçãoMetal/19.jpg"] },
            { data: "22/07/2024", captura: ["capturas/Unidade 1/2024/7- Julho/LixaçãoMetal/22.jpg", "capturas/Unidade 1/2024/7- Julho/LixaçãoOsso/22.jpg"] },


            // { data: "", captura: ["", "", ""] },
            // { data: "", captura: ["", "", ""] },
        ],

        Usinagem: [
            { data: "30/11/2023", captura: ["capturas/Unidade 1/11- Novembro/Usinagem/Filetação/30.png", "capturas/Unidade 1/11- Novembro/Usinagem/Tupia/30.png"] },
            
            { data: "19/12/2023", captura: ["capturas/Unidade 1/12- Dezembro/Usinagem/Filetação/19.png", "capturas/Unidade 1/12- Dezembro/Usinagem/Tupia/11.png"] },
                                             
            { data: "31/01/2024", captura: ["capturas/Unidade 1/2024/1- Janeiro/Usinagem/Filetação/31.png", "capturas/Unidade 1/2024/1- Janeiro/Usinagem/Tupia/31.png"] },
            
            { data: "29/02/2024", captura: ["capturas/Unidade 1/2024/2- Fevereiro/Usinagem/Filetação/29.png", "capturas/Unidade 1/2024/2- Fevereiro/Usinagem/Tupia/29.png"] },

            { data: "28/03/2024", captura: ["capturas/Unidade 1/2024/3- Março/Usinagem/Filetação/28.jpg", "capturas/Unidade 1/2024/3- Março/Usinagem/Tupia/25.jpg"] },

            { data: "30/04/2024", captura: ["capturas/Unidade 1/2024/4- Abril/Usinagem/Filetação/30.jpeg", "capturas/Unidade 1/2024/4- Abril/Usinagem/Tupia/30.jpeg"] },

            { data: "30/05/2024", captura: ["capturas/Unidade 1/2024/5- Maio/Usinagem/Filetação/30.jpg", "capturas/Unidade 1/2024/5- Maio/Usinagem/Tupia/29.jpg"] },

            { data: "28/06/2024", captura: ["capturas/Unidade 1/2024/6- Junho/Usinagem/Filetação/28.jpg", "capturas/Unidade 1/2024/6- Junho/Usinagem/Tupia/28.jpg"] },

            { data: "01/07/2024", captura: ["capturas/Unidade 1/2024/7- Julho/Usinagem/Filetação/1.jpg"] },
            { data: "04/07/2024", captura: ["capturas/Unidade 1/2024/7- Julho/Usinagem/Filetação/4.jpg", "capturas/Unidade 1/2024/7- Julho/Usinagem/Tupia/4.jpg"] },
            { data: "08/07/2024", captura: ["capturas/Unidade 1/2024/7- Julho/Usinagem/Filetação/8.jpg", "capturas/Unidade 1/2024/7- Julho/Usinagem/Tupia/5.jpg"] },
            { data: "15/07/2024", captura: ["capturas/Unidade 1/2024/7- Julho/Usinagem/Filetação/15.jpg", "capturas/Unidade 1/2024/7- Julho/Usinagem/Tupia/15.jpg"] },
            { data: "17/07/2024", captura: ["capturas/Unidade 1/2024/7- Julho/Usinagem/Filetação/17.jpg", "capturas/Unidade 1/2024/7- Julho/Usinagem/Tupia/17.jpg"] },
            { data: "22/07/2024", captura: ["capturas/Unidade 1/2024/7- Julho/Usinagem/Filetação/22.jpg", "capturas/Unidade 1/2024/7- Julho/Usinagem/Tupia/22.jpg"] },


            // { data: "", captura: ["", ""] },
            // { data: "", captura: ["", ""] },
        ],
        
        Montagem: [
            { data: "30/11/2023", captura: ["capturas/Unidade 1/11- Novembro/Usinagem/Montagem/30.png"] },
                                            
            { data: "20/12/2023", captura: ["capturas/Unidade 1/12- Dezembro/Usinagem/Montagem/20.png"] },

            { data: "31/01/2024", captura: ["capturas/Unidade 1/2024/1- Janeiro/Usinagem/Montagem/31.png"] },

            { data: "29/02/2024", captura: ["capturas/Unidade 1/2024/2- Fevereiro/Usinagem/Montagem/29.png"] },

            { data: "28/03/2024", captura: ["capturas/Unidade 1/2024/3- Março/Usinagem/Montagem/28.jpg"] },

            { data: "30/04/2024", captura: ["capturas/Unidade 1/2024/4- Abril/Usinagem/Montagem/30.jpeg"] },
            
            { data: "30/05/2024", captura: ["capturas/Unidade 1/2024/5- Maio/Usinagem/Montagem/30.jpg"] },

            { data: "28/06/2024", captura: ["capturas/Unidade 1/2024/6- Junho/Usinagem/Montagem/28.jpg"] },

            { data: "01/07/2024", captura: ["capturas/Unidade 1/2024/7- Julho/Usinagem/Montagem/1.jpg"] },
            { data: "02/07/2024", captura: ["capturas/Unidade 1/2024/7- Julho/Usinagem/Montagem/2.jpg"] },
            { data: "04/07/2024", captura: ["capturas/Unidade 1/2024/7- Julho/Usinagem/Montagem/4.jpg"] },
            { data: "05/07/2024", captura: ["capturas/Unidade 1/2024/7- Julho/Usinagem/Montagem/5.jpg"] },
            { data: "08/07/2024", captura: ["capturas/Unidade 1/2024/7- Julho/Usinagem/Montagem/8.jpg"] },
            { data: "09/07/2024", captura: ["capturas/Unidade 1/2024/7- Julho/Usinagem/Montagem/9.jpg"] },
            { data: "10/07/2024", captura: ["capturas/Unidade 1/2024/7- Julho/Usinagem/Montagem/10.jpg"] },
            { data: "12/07/2024", captura: ["capturas/Unidade 1/2024/7- Julho/Usinagem/Montagem/12.jpg"] },
            { data: "15/07/2024", captura: ["capturas/Unidade 1/2024/7- Julho/Usinagem/Montagem/15.jpg"] },
            { data: "16/07/2024", captura: ["capturas/Unidade 1/2024/7- Julho/Usinagem/Montagem/16.jpg"] },
            { data: "17/07/2024", captura: ["capturas/Unidade 1/2024/7- Julho/Usinagem/Montagem/17.jpg"] },
            { data: "19/07/2024", captura: ["capturas/Unidade 1/2024/7- Julho/Usinagem/Montagem/19.jpg"] },
            { data: "22/07/2024", captura: ["capturas/Unidade 1/2024/7- Julho/Usinagem/Montagem/22.jpg"] },
            { data: "23/07/2024", captura: ["capturas/Unidade 1/2024/7- Julho/Usinagem/Montagem/23.jpg"] },


            // { data: "", captura: [""] },
            // { data: "", captura: [""] },
        ],
    },
    
    UA2: {
        Telinha: [
            { data: "30/11/2023", captura: ["capturas/Unidade 2/Expedição/11- Novembro/Telinha 30-11.png"] },
            
            { data: "20/12/2023", captura: ["capturas/Unidade 2/Expedição/12- Dezembro/20.png"] },

            { data: "31/01/2024", captura: ["capturas/Unidade 2/Expedição/2024/1- Janeiro/31.png"] },
            
            { data: "29/02/2024", captura: ["capturas/Unidade 2/Expedição/2024/2- Fevereiro/29.png"] },

            { data: "28/03/2024", captura: ["capturas/Unidade 2/Expedição/2024/3- Março/28.png"] },

            { data: "30/04/2024", captura: ["capturas/Unidade 2/Expedição/2024/4- Abril/30.png"] },            

            { data: "30/05/2024", captura: ["capturas/Unidade 2/Expedição/2024/5- Maio/30.png"] },

            { data: "28/06/2024", captura: ["capturas/Unidade 2/Expedição/2024/6- Junho/28.png"] },

            { data: "01/07/2024", captura: ["capturas/Unidade 2/Expedição/2024/7- Julho/1.png"] },
            { data: "02/07/2024", captura: ["capturas/Unidade 2/Expedição/2024/7- Julho/2.png"] },
            { data: "04/07/2024", captura: ["capturas/Unidade 2/Expedição/2024/7- Julho/4.png"] },
            { data: "05/07/2024", captura: ["capturas/Unidade 2/Expedição/2024/7- Julho/5.png"] },
            { data: "08/07/2024", captura: ["capturas/Unidade 2/Expedição/2024/7- Julho/8.png"] },
            { data: "09/07/2024", captura: ["capturas/Unidade 2/Expedição/2024/7- Julho/9.png"] },
            { data: "10/07/2024", captura: ["capturas/Unidade 2/Expedição/2024/7- Julho/10.png"] },
            { data: "11/07/2024", captura: ["capturas/Unidade 2/Expedição/2024/7- Julho/11.png"] },
            { data: "12/07/2024", captura: ["capturas/Unidade 2/Expedição/2024/7- Julho/12.png"] },
            { data: "15/07/2024", captura: ["capturas/Unidade 2/Expedição/2024/7- Julho/15.png"] },
            { data: "16/07/2024", captura: ["capturas/Unidade 2/Expedição/2024/7- Julho/16.png"] },


            // { data: "", captura: [""] },
            // { data: "", captura: [""] },
        ],

        Estofaria: [
            { data: "30/11/2023", captura: ["capturas/Unidade 2/Estofaria/11- Novembro/.Estofadores/Estofadores_30_pt1.png", "capturas/Unidade 2/Estofaria/11- Novembro/.Estofadores/Estofadores_30_pt2.png", "capturas/Unidade 2/Estofaria/11- Novembro/Colagem/Colagem 30-11.png", "capturas/Unidade 2/Estofaria/11- Novembro/Costura/Costura 30-11.png", "capturas/Unidade 2/Estofaria/11- Novembro/Percinta-Montagem/Percinta-Montagem 30-11.png", "capturas/Unidade 2/Estofaria/11- Novembro/Bordadeira/Bordadeira 30-11.png"] },
            
            { data: "20/12/2023", captura: ["capturas/Unidade 2/Estofaria/12- Dezembro/.Estofadores/20-pt1.png", "capturas/Unidade 2/Estofaria/12- Dezembro/.Estofadores/20-pt2.png", "capturas/Unidade 2/Estofaria/12- Dezembro/Coladores/20.png", "capturas/Unidade 2/Estofaria/12- Dezembro/Costura/20.png", "capturas/Unidade 2/Estofaria/12- Dezembro/Perc_Mont/20.png"] },

            { data: "31/01/2024", captura: ["capturas/Unidade 2/Estofaria/2024/1- Janeiro/.Estofadores/31-pt-1.png", "capturas/Unidade 2/Estofaria/2024/1- Janeiro/.Estofadores/31-pt-2.png", "capturas/Unidade 2/Estofaria/2024/1- Janeiro/Colagem/31.png", "capturas/Unidade 2/Estofaria/2024/1- Janeiro/Costura/31.png", "capturas/Unidade 2/Estofaria/2024/1- Janeiro/Percinta/31.png"] },

            { data: "29/02/2024", captura: ["capturas/Unidade 2/Estofaria/2024/2- Fevereiro/.Estofadores/29-pt1.png", "capturas/Unidade 2/Estofaria/2024/2- Fevereiro/.Estofadores/29-pt2.png", "capturas/Unidade 2/Estofaria/2024/2- Fevereiro/Colagem/29.png", "capturas/Unidade 2/Estofaria/2024/2- Fevereiro/Costura/29.png", "capturas/Unidade 2/Estofaria/2024/2- Fevereiro/Percinta/29.png", "capturas/Unidade 2/Estofaria/2024/2- Fevereiro/Bordadeira/29.png"] },

            { data: "28/03/2024", captura: ["capturas/Unidade 2/Estofaria/2024/3- Março/.Estofadores/28-pt1.png", "capturas/Unidade 2/Estofaria/2024/3- Março/.Estofadores/28-pt2.png", "capturas/Unidade 2/Estofaria/2024/3- Março/Colagem/28.png", "capturas/Unidade 2/Estofaria/2024/3- Março/Costura/28.png", "capturas/Unidade 2/Estofaria/2024/3- Março/Percinta/28.png", "capturas/Unidade 2/Estofaria/2024/3- Março/Bordadeira/28.png"] },

            { data: "30/04/2024", captura: ["capturas/Unidade 2/Estofaria/2024/4- Abril/.Estofadores/30-pt1.png", "capturas/Unidade 2/Estofaria/2024/4- Abril/.Estofadores/30-pt2.png", "capturas/Unidade 2/Estofaria/2024/4- Abril/Colagem/30.png", "capturas/Unidade 2/Estofaria/2024/4- Abril/Costura/30.png", "capturas/Unidade 2/Estofaria/2024/4- Abril/Percinta/30.png", "capturas/Unidade 2/Estofaria/2024/4- Abril/Bordadeira/30.png"] },

            { data: "30/05/2024", captura: ["capturas/Unidade 2/Estofaria/2024/5- Maio/.Estofadores/30-pt1.png", "capturas/Unidade 2/Estofaria/2024/5- Maio/.Estofadores/30-pt2.png", "capturas/Unidade 2/Estofaria/2024/5- Maio/Colagem/30.png", "capturas/Unidade 2/Estofaria/2024/5- Maio/Costura/30.png", "capturas/Unidade 2/Estofaria/2024/5- Maio/Percinta/30.png", "capturas/Unidade 2/Estofaria/2024/5- Maio/Bordadeira/30.png"] },

            { data: "28/06/2024", captura: ["capturas/Unidade 2/Estofaria/2024/6- Junho/.Estofadores/28-pt1.png", "capturas/Unidade 2/Estofaria/2024/6- Junho/.Estofadores/28-pt2.png", "capturas/Unidade 2/Estofaria/2024/6- Junho/Colagem/28.png", "capturas/Unidade 2/Estofaria/2024/6- Junho/Costura/28.png", "capturas/Unidade 2/Estofaria/2024/6- Junho/Percinta/28.png", "capturas/Unidade 2/Estofaria/2024/6- Junho/zBordadeira/28.png"] },

            { data: "01/07/2024", captura: ["capturas/Unidade 2/Estofaria/2024/7- Julho/.Estofadores/1-pt1.png", "capturas/Unidade 2/Estofaria/2024/7- Julho/.Estofadores/1-pt2.png", "capturas/Unidade 2/Estofaria/2024/7- Julho/Colagem/1.png", "capturas/Unidade 2/Estofaria/2024/7- Julho/Costura/1.png", "capturas/Unidade 2/Estofaria/2024/7- Julho/Percinta/1.png"] },
            { data: "02/07/2024", captura: ["capturas/Unidade 2/Estofaria/2024/7- Julho/.Estofadores/2-pt1.png", "capturas/Unidade 2/Estofaria/2024/7- Julho/.Estofadores/2-pt2.png", "capturas/Unidade 2/Estofaria/2024/7- Julho/Colagem/2.png", "capturas/Unidade 2/Estofaria/2024/7- Julho/Costura/2.png", "capturas/Unidade 2/Estofaria/2024/7- Julho/Percinta/2.png"] },
            { data: "04/07/2024", captura: ["capturas/Unidade 2/Estofaria/2024/7- Julho/.Estofadores/4-pt1.png", "capturas/Unidade 2/Estofaria/2024/7- Julho/.Estofadores/4-pt2.png", "capturas/Unidade 2/Estofaria/2024/7- Julho/Colagem/4.png", "capturas/Unidade 2/Estofaria/2024/7- Julho/Costura/4.png", "capturas/Unidade 2/Estofaria/2024/7- Julho/Percinta/4.png"] },
            { data: "05/07/2024", captura: ["capturas/Unidade 2/Estofaria/2024/7- Julho/.Estofadores/5-pt1.png", "capturas/Unidade 2/Estofaria/2024/7- Julho/.Estofadores/5-pt2.png", "capturas/Unidade 2/Estofaria/2024/7- Julho/Colagem/5.png", "capturas/Unidade 2/Estofaria/2024/7- Julho/Costura/5.png", "capturas/Unidade 2/Estofaria/2024/7- Julho/Percinta/5.png"] },
            { data: "08/07/2024", captura: ["capturas/Unidade 2/Estofaria/2024/7- Julho/.Estofadores/8-pt1.png", "capturas/Unidade 2/Estofaria/2024/7- Julho/.Estofadores/8-pt2.png", "capturas/Unidade 2/Estofaria/2024/7- Julho/Colagem/8.png", "capturas/Unidade 2/Estofaria/2024/7- Julho/Costura/8.png", "capturas/Unidade 2/Estofaria/2024/7- Julho/Percinta/8.png", "capturas/Unidade 2/Estofaria/2024/7- Julho/zBordadeira/8.png"] },
            { data: "09/07/2024", captura: ["capturas/Unidade 2/Estofaria/2024/7- Julho/.Estofadores/9-pt1.png", "capturas/Unidade 2/Estofaria/2024/7- Julho/.Estofadores/9-pt2.png", "capturas/Unidade 2/Estofaria/2024/7- Julho/Colagem/9.png", "capturas/Unidade 2/Estofaria/2024/7- Julho/Costura/9.png", "capturas/Unidade 2/Estofaria/2024/7- Julho/Percinta/9.png"] },
            { data: "10/07/2024", captura: ["capturas/Unidade 2/Estofaria/2024/7- Julho/.Estofadores/10-pt1.png", "capturas/Unidade 2/Estofaria/2024/7- Julho/.Estofadores/10-pt2.png", "capturas/Unidade 2/Estofaria/2024/7- Julho/Colagem/10.png", "capturas/Unidade 2/Estofaria/2024/7- Julho/Costura/10.png", "capturas/Unidade 2/Estofaria/2024/7- Julho/Percinta/10.png"] },
            { data: "11/07/2024", captura: ["capturas/Unidade 2/Estofaria/2024/7- Julho/.Estofadores/11-pt1.png", "capturas/Unidade 2/Estofaria/2024/7- Julho/.Estofadores/11-pt2.png", "capturas/Unidade 2/Estofaria/2024/7- Julho/Colagem/11.png", "capturas/Unidade 2/Estofaria/2024/7- Julho/Costura/11.png", "capturas/Unidade 2/Estofaria/2024/7- Julho/Percinta/11.png", "capturas/Unidade 2/Estofaria/2024/7- Julho/zBordadeira/11.png"] },
            { data: "12/07/2024", captura: ["capturas/Unidade 2/Estofaria/2024/7- Julho/.Estofadores/12-pt1.png", "capturas/Unidade 2/Estofaria/2024/7- Julho/.Estofadores/12-pt2.png", "capturas/Unidade 2/Estofaria/2024/7- Julho/Colagem/12.png", "capturas/Unidade 2/Estofaria/2024/7- Julho/Costura/12.png", "capturas/Unidade 2/Estofaria/2024/7- Julho/Percinta/12.png"] },
            { data: "15/07/2024", captura: ["capturas/Unidade 2/Estofaria/2024/7- Julho/.Estofadores/15-pt1.png", "capturas/Unidade 2/Estofaria/2024/7- Julho/.Estofadores/15-pt2.png", "capturas/Unidade 2/Estofaria/2024/7- Julho/Colagem/15.png", "capturas/Unidade 2/Estofaria/2024/7- Julho/Costura/15.png", "capturas/Unidade 2/Estofaria/2024/7- Julho/Percinta/15.png"] },
            { data: "16/07/2024", captura: ["capturas/Unidade 2/Estofaria/2024/7- Julho/.Estofadores/16-pt1.png", "capturas/Unidade 2/Estofaria/2024/7- Julho/.Estofadores/16-pt2.png", "capturas/Unidade 2/Estofaria/2024/7- Julho/Colagem/16.png", "capturas/Unidade 2/Estofaria/2024/7- Julho/Costura/16.png", "capturas/Unidade 2/Estofaria/2024/7- Julho/Percinta/16.png"] },
            { data: "17/07/2024", captura: ["capturas/Unidade 2/Estofaria/2024/7- Julho/.Estofadores/17-pt1.png", "capturas/Unidade 2/Estofaria/2024/7- Julho/.Estofadores/17-pt2.png", "capturas/Unidade 2/Estofaria/2024/7- Julho/Colagem/17.png", "capturas/Unidade 2/Estofaria/2024/7- Julho/Costura/17.png", "capturas/Unidade 2/Estofaria/2024/7- Julho/Percinta/17.png"] },


            // { data: "", captura: ["", "", "", "", "", ""] },
            // { data: "", captura: ["", "", "", "", "", ""] },
        ],

        CNC: [
            { data: "30/11/2023", captura: ["capturas/Unidade 2/Usinagem/11- Novembro/CNC/CNC-30_pt1.png", "capturas/Unidade 2/Usinagem/11- Novembro/CNC/CNC-30_pt2.png"] },
            
            { data: "20/12/2023", captura: ["capturas/Unidade 2/Usinagem/12- Dezembro/CNC/20-pt1.png", "capturas/Unidade 2/Usinagem/12- Dezembro/CNC/20-pt2.png"] },

            { data: "31/01/2024", captura: ["capturas/Unidade 2/Usinagem/2024/1- Janeiro/CNC/31-pt1.png", "capturas/Unidade 2/Usinagem/2024/1- Janeiro/CNC/31-pt2.png"] },

            { data: "29/02/2024", captura: ["capturas/Unidade 2/Usinagem/2024/2- Fevereiro/CNC/29-pt1.png", "capturas/Unidade 2/Usinagem/2024/2- Fevereiro/CNC/29-pt2.png"] },

            { data: "28/03/2024", captura: ["capturas/Unidade 2/Usinagem/2024/3- Março/CNC/28-pt1.png", "capturas/Unidade 2/Usinagem/2024/3- Março/CNC/28-pt2.png"] },

            { data: "30/04/2024", captura: ["capturas/Unidade 2/Usinagem/2024/4- Abril/CNC/30-pt1.png", "capturas/Unidade 2/Usinagem/2024/4- Abril/CNC/30-pt2.png"] },

            { data: "30/05/2024", captura: ["capturas/Unidade 2/Usinagem/2024/5- Maio/CNC/30-pt1.png", "capturas/Unidade 2/Usinagem/2024/5- Maio/CNC/30-pt2.png"] },

            { data: "28/06/2024", captura: ["capturas/Unidade 2/Usinagem/2024/6- Junho/CNC/28-pt1.png", "capturas/Unidade 2/Usinagem/2024/6- Junho/CNC/28-pt2.png"] },

            { data: "02/07/2024", captura: ["capturas/Unidade 2/Usinagem/2024/7- Julho/CNC/2-pt1.png", "capturas/Unidade 2/Usinagem/2024/7- Julho/CNC/2-pt2.png"] },
            { data: "08/07/2024", captura: ["capturas/Unidade 2/Usinagem/2024/7- Julho/CNC/8-pt1.png", "capturas/Unidade 2/Usinagem/2024/7- Julho/CNC/8-pt2.png"] },
            { data: "09/07/2024", captura: ["capturas/Unidade 2/Usinagem/2024/7- Julho/CNC/9-pt1.png", "capturas/Unidade 2/Usinagem/2024/7- Julho/CNC/9-pt2.png"] },
            { data: "11/07/2024", captura: ["capturas/Unidade 2/Usinagem/2024/7- Julho/CNC/11-pt1.png", "capturas/Unidade 2/Usinagem/2024/7- Julho/CNC/11-pt2.png"] },
            { data: "16/07/2024", captura: ["capturas/Unidade 2/Usinagem/2024/7- Julho/CNC/16-pt1.png", "capturas/Unidade 2/Usinagem/2024/7- Julho/CNC/16-pt2.png"] },
            { data: "23/07/2024", captura: ["capturas/Unidade 2/Usinagem/2024/7- Julho/CNC/23-pt1.png", "capturas/Unidade 2/Usinagem/2024/7- Julho/CNC/23-pt2.png"] },


            // { data: "", captura: ["", ""] },
            // { data: "", captura: ["", ""] },
        ],

        Usinagem: [
            { data: "30/11/2023", captura: ["capturas/Unidade 2/Usinagem/11- Novembro/Usinagem/Usinagem 30-11.png", "capturas/Unidade 2/Usinagem/11- Novembro/Roquite/Roquite 30-11.png", "capturas/Unidade 2/Usinagem/11- Novembro/Mont. Usinagem/Mont. Usinagem 30-11.png", "capturas/Unidade 2/Usinagem/11- Novembro/Mult. Mold/Mult. Mold 30-11.png"] },
            
            { data: "20/12/2023", captura: ["capturas/Unidade 2/Usinagem/12- Dezembro/Rolinho/20.png", "capturas/Unidade 2/Usinagem/12- Dezembro/Roquite/20.png", "capturas/Unidade 2/Usinagem/12- Dezembro/Usinagem/20.png", "", "capturas/Unidade 2/Usinagem/12- Dezembro/Mult. Mold/20.png"] },

            { data: "31/01/2024", captura: ["capturas/Unidade 2/Usinagem/2024/1- Janeiro/Rolinho/31.png", "capturas/Unidade 2/Usinagem/2024/1- Janeiro/Roquite/31.png", "capturas/Unidade 2/Usinagem/2024/1- Janeiro/Usinagem/31.png", "capturas/Unidade 2/Usinagem/2024/1- Janeiro/Montagem/31.png"] },

            { data: "29/02/2024", captura: ["capturas/Unidade 2/Usinagem/2024/2- Fevereiro/Rolinho/29.png", "capturas/Unidade 2/Usinagem/2024/2- Fevereiro/Roquite/29.png", "capturas/Unidade 2/Usinagem/2024/2- Fevereiro/Usinagem/29.png", "capturas/Unidade 2/Usinagem/2024/2- Fevereiro/Montagem/29.png", "capturas/Unidade 2/Usinagem/2024/2- Fevereiro/MM/29.png"] },

            { data: "28/03/2024", captura: ["capturas/Unidade 2/Usinagem/2024/3- Março/Rolinho/28.png", "capturas/Unidade 2/Usinagem/2024/3- Março/Roquite/28.png", "capturas/Unidade 2/Usinagem/2024/3- Março/Usinagem/28.png", "capturas/Unidade 2/Usinagem/2024/3- Março/Montagem/28.png", "capturas/Unidade 2/Usinagem/2024/3- Março/MM/28.png"] },

            { data: "30/04/2024", captura: ["capturas/Unidade 2/Usinagem/2024/4- Abril/Rolinho/30.png", "capturas/Unidade 2/Usinagem/2024/4- Abril/Roquite/30.png", "capturas/Unidade 2/Usinagem/2024/4- Abril/Usinagem/30.png", "capturas/Unidade 2/Usinagem/2024/4- Abril/Mont. Us/30.png", "capturas/Unidade 2/Usinagem/2024/4- Abril/MM/30.png"] },

            { data: "30/05/2024", captura: ["capturas/Unidade 2/Usinagem/2024/5- Maio/Rolinho/30.png", "capturas/Unidade 2/Usinagem/2024/5- Maio/Roquite/30.png", "capturas/Unidade 2/Usinagem/2024/5- Maio/Usinagem/30.png", "capturas/Unidade 2/Usinagem/2024/5- Maio/Mont Us/30.png", "capturas/Unidade 2/Usinagem/2024/5- Maio/MM/30.png"] },

            { data: "28/06/2024", captura: ["capturas/Unidade 2/Usinagem/2024/6- Junho/Rolinho/28.png", "capturas/Unidade 2/Usinagem/2024/6- Junho/Roquite/28.png", "capturas/Unidade 2/Usinagem/2024/6- Junho/Usinagem/28.png", "capturas/Unidade 2/Usinagem/2024/6- Junho/Mont.Us/28.png", "capturas/Unidade 2/Usinagem/2024/6- Junho/MM/28.png"] },

            { data: "08/07/2024", captura: ["capturas/Unidade 2/Usinagem/2024/7- Julho/Rolinho/8.png", "capturas/Unidade 2/Usinagem/2024/7- Julho/Roquite/8.png", "capturas/Unidade 2/Usinagem/2024/7- Julho/Usinagem/8.png", "capturas/Unidade 2/Usinagem/2024/7- Julho/Mont.Us/8.png", "capturas/Unidade 2/Usinagem/2024/7- Julho/MM/8.png"] },
            { data: "09/07/2024", captura: ["capturas/Unidade 2/Usinagem/2024/7- Julho/Rolinho/9.png", "capturas/Unidade 2/Usinagem/2024/7- Julho/Roquite/9.png", "capturas/Unidade 2/Usinagem/2024/7- Julho/Usinagem/9.png", "capturas/Unidade 2/Usinagem/2024/7- Julho/Mont.Us/9.png", "capturas/Unidade 2/Usinagem/2024/7- Julho/MM/9.png"] },
            { data: "11/07/2024", captura: ["capturas/Unidade 2/Usinagem/2024/7- Julho/Rolinho/11.png", "capturas/Unidade 2/Usinagem/2024/7- Julho/Roquite/11.png", "capturas/Unidade 2/Usinagem/2024/7- Julho/Usinagem/11.png", "capturas/Unidade 2/Usinagem/2024/7- Julho/Mont.Us/11.png", "capturas/Unidade 2/Usinagem/2024/7- Julho/MM/11.png"] },
            { data: "15/07/2024", captura: ["capturas/Unidade 2/Usinagem/2024/7- Julho/Rolinho/15.png"] },
            { data: "16/07/2024", captura: ["capturas/Unidade 2/Usinagem/2024/7- Julho/Rolinho/16.png", "capturas/Unidade 2/Usinagem/2024/7- Julho/Roquite/16.png", "capturas/Unidade 2/Usinagem/2024/7- Julho/Usinagem/16.png", "capturas/Unidade 2/Usinagem/2024/7- Julho/Mont.Us/16.png", "capturas/Unidade 2/Usinagem/2024/7- Julho/MM/16.png"] },
            { data: "23/07/2024", captura: ["capturas/Unidade 2/Usinagem/2024/7- Julho/Rolinho/23.png", "capturas/Unidade 2/Usinagem/2024/7- Julho/Roquite/23.png", "capturas/Unidade 2/Usinagem/2024/7- Julho/Usinagem/23.png", "capturas/Unidade 2/Usinagem/2024/7- Julho/Mont.Us/23.png", "capturas/Unidade 2/Usinagem/2024/7- Julho/MM/23.png"] },


            // { data: "", captura: ["", "", "", "", ""] },
            // { data: "", captura: ["", "", "", "", ""] },
        ],

        Acabamento: [
            { data: "30/11/2023", captura: ["capturas/Unidade 2/Acabamento/11- Novembro/tingidor/30.png", "capturas/Unidade 2/Acabamento/11- Novembro/robo/30.png", "capturas/Unidade 2/Acabamento/11- Novembro/pé trás/30.png", "capturas/Unidade 2/Acabamento/11- Novembro/pé frente/30.png", "capturas/Unidade 2/Acabamento/11- Novembro/mont/30.png", "capturas/Unidade 2/Acabamento/11- Novembro/maquininha/30.png", "capturas/Unidade 2/Acabamento/11- Novembro/fundo/30.png",] },

            { data: "20/12/2023", captura: ["capturas/Unidade 2/Acabamento/12- Dezembro/tingidor/20.png", "capturas/Unidade 2/Acabamento/12- Dezembro/robo/20.png", "capturas/Unidade 2/Acabamento/12- Dezembro/pé trás/20.png", "capturas/Unidade 2/Acabamento/12- Dezembro/pé frente/20.png", "capturas/Unidade 2/Acabamento/12- Dezembro/mont/20.png", "capturas/Unidade 2/Acabamento/12- Dezembro/maquininha/20.png", "capturas/Unidade 2/Acabamento/12- Dezembro/fundo/20.png",] },

            { data: "31/01/2024", captura: ["capturas/Unidade 2/Acabamento/2024/1- Janeiro/tingidor/31.png", "capturas/Unidade 2/Acabamento/2024/1- Janeiro/robo/31.png", "capturas/Unidade 2/Acabamento/2024/1- Janeiro/pe traz/31.png", "capturas/Unidade 2/Acabamento/2024/1- Janeiro/pe frente/31.png", "capturas/Unidade 2/Acabamento/2024/1- Janeiro/mont/31.png", "capturas/Unidade 2/Acabamento/2024/1- Janeiro/lix fundo maq/31.png", "capturas/Unidade 2/Acabamento/2024/1- Janeiro/lix fundo manual/31.png"] },

            { data: "29/02/2024", captura: ["capturas/Unidade 2/Acabamento/2024/2- Fevereiro/tingidor/29.png", "capturas/Unidade 2/Acabamento/2024/2- Fevereiro/robo/29.png", "capturas/Unidade 2/Acabamento/2024/2- Fevereiro/pe traz/29.png", "capturas/Unidade 2/Acabamento/2024/2- Fevereiro/pe frente/29.png", "capturas/Unidade 2/Acabamento/2024/2- Fevereiro/mont/29.png", "capturas/Unidade 2/Acabamento/2024/2- Fevereiro/lix fundo maq/29.png", "capturas/Unidade 2/Acabamento/2024/2- Fevereiro/lix fundo manual/29.png"] },

            { data: "28/03/2024", captura: ["capturas/Unidade 2/Acabamento/2024/3- Março/tingidor/28.jpg", "capturas/Unidade 2/Acabamento/2024/3- Março/robo/28.jpg", "capturas/Unidade 2/Acabamento/2024/3- Março/pe tras/28.jpg", "capturas/Unidade 2/Acabamento/2024/3- Março/pe frente/28.jpg", "capturas/Unidade 2/Acabamento/2024/3- Março/mont/28.jpg", "capturas/Unidade 2/Acabamento/2024/3- Março/lix fundo maq/28.jpg", "capturas/Unidade 2/Acabamento/2024/3- Março/lix fundo manual/28.jpg"] },

            { data: "30/04/2024", captura: ["capturas/Unidade 2/Acabamento/2024/4- Abril/ting/30.jpeg", "capturas/Unidade 2/Acabamento/2024/4- Abril/robo/30.jpeg", "capturas/Unidade 2/Acabamento/2024/4- Abril/pe traz/30.jpeg", "capturas/Unidade 2/Acabamento/2024/4- Abril/pe frente/30.jpeg", "capturas/Unidade 2/Acabamento/2024/4- Abril/mont/30.jpeg", "capturas/Unidade 2/Acabamento/2024/4- Abril/lix.fundo maquininha/30.jpeg", "capturas/Unidade 2/Acabamento/2024/4- Abril/lix.fundo manual/30.jpeg"] },

            { data: "30/05/2024", captura: ["capturas/Unidade 2/Acabamento/2024/5- Maio/Tingidor/30.jpg", "capturas/Unidade 2/Acabamento/2024/5- Maio/Robô/30.jpg", "capturas/Unidade 2/Acabamento/2024/5- Maio/PéTras/30.jpg", "capturas/Unidade 2/Acabamento/2024/5- Maio/PéFrente/30.jpg", "capturas/Unidade 2/Acabamento/2024/5- Maio/Montagem/30.jpg", "capturas/Unidade 2/Acabamento/2024/5- Maio/LixaçãoFundoMaquininha/30.jpg", "capturas/Unidade 2/Acabamento/2024/5- Maio/LixaçãoFundoManual/30.jpg"] },

            { data: "28/06/2024", captura: ["capturas/Unidade 2/Acabamento/2024/6- Junho/Tingidor/28.jpg", "capturas/Unidade 2/Acabamento/2024/6- Junho/Robô/28.jpg", "capturas/Unidade 2/Acabamento/2024/6- Junho/PéTras/28.jpg", "capturas/Unidade 2/Acabamento/2024/6- Junho/PéFrente/28.jpg", "capturas/Unidade 2/Acabamento/2024/6- Junho/Montagem/28.jpg", "capturas/Unidade 2/Acabamento/2024/6- Junho/LixaçãoFundoMaquininha/28.jpg", "capturas/Unidade 2/Acabamento/2024/6- Junho/LixaçãoFundoManual/28.jpg"] },

            { data: "02/07/2024", captura: ["capturas/Unidade 2/Acabamento/2024/7- Julho/Tingidor/2.jpg", "capturas/Unidade 2/Acabamento/2024/7- Julho/Robô/2.jpg", "capturas/Unidade 2/Acabamento/2024/7- Julho/PéTras/2.jpg", "capturas/Unidade 2/Acabamento/2024/7- Julho/PéFrente/2.jpg", "capturas/Unidade 2/Acabamento/2024/7- Julho/Montagem/2.jpg", "capturas/Unidade 2/Acabamento/2024/7- Julho/LixaçãoFundoMaquininha/2.jpg", "capturas/Unidade 2/Acabamento/2024/7- Julho/LixaçãoFundoManual/2.jpg"] },
            { data: "05/07/2024", captura: ["capturas/Unidade 2/Acabamento/2024/7- Julho/Tingidor/5.jpg", "capturas/Unidade 2/Acabamento/2024/7- Julho/Robô/5.jpg", "capturas/Unidade 2/Acabamento/2024/7- Julho/PéTras/5.jpg", "capturas/Unidade 2/Acabamento/2024/7- Julho/PéFrente/5.jpg", "capturas/Unidade 2/Acabamento/2024/7- Julho/Montagem/5.jpg", "capturas/Unidade 2/Acabamento/2024/7- Julho/LixaçãoFundoMaquininha/5.jpg", "capturas/Unidade 2/Acabamento/2024/7- Julho/LixaçãoFundoManual/5.jpg"] },
            { data: "08/07/2024", captura: ["capturas/Unidade 2/Acabamento/2024/7- Julho/Tingidor/8.jpg", "capturas/Unidade 2/Acabamento/2024/7- Julho/Robô/8.jpg", "capturas/Unidade 2/Acabamento/2024/7- Julho/PéTras/8.jpg", "capturas/Unidade 2/Acabamento/2024/7- Julho/PéFrente/8.jpg", "capturas/Unidade 2/Acabamento/2024/7- Julho/Montagem/8.jpg", "capturas/Unidade 2/Acabamento/2024/7- Julho/LixaçãoFundoMaquininha/8.jpg", "capturas/Unidade 2/Acabamento/2024/7- Julho/LixaçãoFundoManual/8.jpg"] },
            { data: "10/07/2024", captura: ["capturas/Unidade 2/Acabamento/2024/7- Julho/Tingidor/10.jpg", "capturas/Unidade 2/Acabamento/2024/7- Julho/Robô/10.jpg", "capturas/Unidade 2/Acabamento/2024/7- Julho/PéTras/10.jpg", "capturas/Unidade 2/Acabamento/2024/7- Julho/PéFrente/10.jpg", "capturas/Unidade 2/Acabamento/2024/7- Julho/Montagem/10.jpg", "capturas/Unidade 2/Acabamento/2024/7- Julho/LixaçãoFundoMaquininha/10.jpg", "capturas/Unidade 2/Acabamento/2024/7- Julho/LixaçãoFundoManual/10.jpg"] },
            { data: "16/07/2024", captura: ["capturas/Unidade 2/Acabamento/2024/7- Julho/Tingidor/16.jpg", "capturas/Unidade 2/Acabamento/2024/7- Julho/Robô/16.jpg", "capturas/Unidade 2/Acabamento/2024/7- Julho/PéTras/16.jpg", "capturas/Unidade 2/Acabamento/2024/7- Julho/PéFrente/16.jpg", "capturas/Unidade 2/Acabamento/2024/7- Julho/Montagem/16.jpg", "capturas/Unidade 2/Acabamento/2024/7- Julho/LixaçãoFundoMaquininha/16.jpg", "capturas/Unidade 2/Acabamento/2024/7- Julho/LixaçãoFundoManual/16.jpg"] },
            { data: "17/07/2024", captura: ["capturas/Unidade 2/Acabamento/2024/7- Julho/Tingidor/17.jpg", "capturas/Unidade 2/Acabamento/2024/7- Julho/Robô/17.jpg", "capturas/Unidade 2/Acabamento/2024/7- Julho/PéTras/17.jpg", "capturas/Unidade 2/Acabamento/2024/7- Julho/PéFrente/17..jpg", "capturas/Unidade 2/Acabamento/2024/7- Julho/Montagem/17.jpg", "capturas/Unidade 2/Acabamento/2024/7- Julho/LixaçãoFundoMaquininha/17.jpg", "capturas/Unidade 2/Acabamento/2024/7- Julho/LixaçãoFundoManual/17.jpg"] },
            { data: "23/07/2024", captura: ["capturas/Unidade 2/Acabamento/2024/7- Julho/Tingidor/23.jpg", "capturas/Unidade 2/Acabamento/2024/7- Julho/Robô/23.jpg", "capturas/Unidade 2/Acabamento/2024/7- Julho/PéTras/23.jpg", "capturas/Unidade 2/Acabamento/2024/7- Julho/PéFrente/23.jpg", "capturas/Unidade 2/Acabamento/2024/7- Julho/Montagem/23.jpg", "capturas/Unidade 2/Acabamento/2024/7- Julho/LixaçãoFundoMaquininha/23.jpg", "capturas/Unidade 2/Acabamento/2024/7- Julho/LixaçãoFundoManual/23.jpg"] },


            // { data: "", captura: ["", "", "", "", "", "", ""] },
            // { data: "", captura: ["", "", "", "", "", "", ""] },
        ],
    },

    UA3: {
        Traçador: [
            { data: "30/11/2023", captura: ["capturas/Unidade 3/Usinagem/11- Novembro/Traçador 30-11.png"] },
            
            { data: "20/12/2023", captura: ["capturas/Unidade 3/Usinagem/12- Dezembro/20.png"] },

            { data: "31/01/2024", captura: ["capturas/Unidade 3/Usinagem/2024/1- Janeiro/31.png"] },

            { data: "29/02/2024", captura: ["capturas/Unidade 3/Usinagem/2024/2- Fevereiro/29.png"] },

            { data: "28/03/2024", captura: ["capturas/Unidade 3/Usinagem/2024/3- Março/28.png"] },

            { data: "30/04/2024", captura: ["capturas/Unidade 3/Usinagem/2024/4- Abril/30.png"] },

            { data: "30/05/2024", captura: ["capturas/Unidade 3/Usinagem/2024/5- Maio/30.png"] },

            { data: "28/06/2024", captura: ["capturas/Unidade 3/Usinagem/2024/6- Junho/28.png"] },

            { data: "08/07/2024", captura: ["capturas/Unidade 3/Usinagem/2024/7- Julho/8.png"] },
            { data: "09/07/2024", captura: ["capturas/Unidade 3/Usinagem/2024/7- Julho/9.png"] },
            { data: "11/07/2024", captura: ["capturas/Unidade 3/Usinagem/2024/7- Julho/11.png"] },
            { data: "16/07/2024", captura: ["capturas/Unidade 3/Usinagem/2024/7- Julho/16.png"] },
            { data: "23/07/2024", captura: ["capturas/Unidade 3/Usinagem/2024/7- Julho/23.png"] },


            // { data: "", captura: [""] },
            // { data: "", captura: [""] },
        ],
    },
    
    UA4: {
        Calibradora: [
            { data: "30/11/2023", captura: ["capturas/Unidade 4/Usinagem/11- Novembro/Calibradora/30.png",] },
            
            { data: "19/12/2023", captura: ["capturas/Unidade 4/Usinagem/12- Dezembro/Calibradora/19.png"] }, 

            { data: "31/01/2024", captura: ["capturas/Unidade 4/Usinagem/2024/1- Janeiro/Calibradora/31.png"] },

            { data: "29/02/2024", captura: ["capturas/Unidade 4/Usinagem/2024/2- Fevereiro/Calibradora/29.png"] },

            { data: "28/03/2024", captura: ["capturas/Unidade 4/Usinagem/2024/3- Março/Calibradora/28.jpg"] },

            { data: "30/04/2024", captura: ["capturas/Unidade 4/Usinagem/2024/4- Abril/Calibradora/30.jpeg"] },

            { data: "30/05/2024", captura: ["capturas/Unidade 4/Usinagem/2024/5- Maio/Calibradora/30.jpg"] },

            { data: "28/06/2024", captura: ["capturas/Unidade 4/Usinagem/2024/6- Junho/Calibradora/28.jpg"] },

            { data: "01/07/2024", captura: ["capturas/Unidade 4/Usinagem/2024/7- Julho/Calibradora/1.jpg"] },
            { data: "05/07/2024", captura: ["capturas/Unidade 4/Usinagem/2024/7- Julho/Calibradora/5.jpg"] },
            { data: "15/07/2024", captura: ["capturas/Unidade 4/Usinagem/2024/7- Julho/Calibradora/15.jpg"] },


            // { data: "", captura: [""] },
            // { data: "", captura: [""] },
        ],

        Prensas: [
            { data: "20/12/2023", captura: ["capturas/Unidade 4/Usinagem/12- Dezembro/prensa frequencia/20.png"] },

            { data: "31/01/2024", captura: ["capturas/Unidade 4/Usinagem/2024/1- Janeiro/Prensas/31.png"] },

            { data: "29/02/2024", captura: ["capturas/Unidade 4/Usinagem/2024/2- Fevereiro/Prensas/29.png"] },

            { data: "28/03/2024", captura: ["capturas/Unidade 4/Usinagem/2024/3- Março/Prensas/28.jpg"] },

            { data: "30/04/2024", captura: ["capturas/Unidade 4/Usinagem/2024/4- Abril/Prensas/30.jpeg"] },

            { data: "30/05/2024", captura: ["capturas/Unidade 4/Usinagem/2024/5- Maio/Prensas/30.jpg"] },

            { data: "28/06/2024", captura: ["capturas/Unidade 4/Usinagem/2024/6- Junho/Prensas/28.jpg"] },

            { data: "01/07/2024", captura: ["capturas/Unidade 4/Usinagem/2024/7- Julho/Prensas/1.jpg"] },
            { data: "05/07/2024", captura: ["capturas/Unidade 4/Usinagem/2024/7- Julho/Prensas/5.jpg"] },
            { data: "15/07/2024", captura: ["capturas/Unidade 4/Usinagem/2024/7- Julho/Prensas/15.jpg"] },


            // { data: "", captura: [""] },
            // { data: "", captura: [""] },
        ],
    },

    UA5: {
        Usinagem: [

            // { data: "", captura: ["", ""] },
            // { data: "", captura: ["", ""] },
        ],

        Tampos: [

            // { data: "", captura: ["", ""] },
            // { data: "", captura: ["", ""] },
        ],
    },

    // Metas de produção

    MU1: {
        lista_acab1: [

            // { data: "", captura: ["", "", "", "", "", "", "", ""] },
            // { data: "", captura: ["", "", "", "", "", "", "", ""] },
        ],

        cg_mq1: [

            { data: "03/06/2024", captura: ["capturas/Metas produção/Unidade 1/2024/cg_mq/6- Junho/3.jpeg"] },
            { data: "04/06/2024", captura: ["capturas/Metas produção/Unidade 1/2024/cg_mq/6- Junho/4.jpeg"] },
            { data: "05/06/2024", captura: ["capturas/Metas produção/Unidade 1/2024/cg_mq/6- Junho/5.jpeg"] },
            { data: "06/06/2024", captura: ["capturas/Metas produção/Unidade 1/2024/cg_mq/6- Junho/6.jpeg"] },
            { data: "07/06/2024", captura: ["capturas/Metas produção/Unidade 1/2024/cg_mq/6- Junho/7.jpeg"] },
            { data: "10/06/2024", captura: ["capturas/Metas produção/Unidade 1/2024/cg_mq/6- Junho/10.jpeg"] },
            { data: "11/06/2024", captura: ["capturas/Metas produção/Unidade 1/2024/cg_mq/6- Junho/11.jpeg"] },
            { data: "12/06/2024", captura: ["capturas/Metas produção/Unidade 1/2024/cg_mq/6- Junho/12.jpeg"] },
            { data: "13/06/2024", captura: ["capturas/Metas produção/Unidade 1/2024/cg_mq/6- Junho/13.jpeg"] },
            { data: "14/06/2024", captura: ["capturas/Metas produção/Unidade 1/2024/cg_mq/6- Junho/14.jpeg"] },
            { data: "17/06/2024", captura: ["capturas/Metas produção/Unidade 1/2024/cg_mq/6- Junho/17.jpeg"] },
            { data: "18/06/2024", captura: ["capturas/Metas produção/Unidade 1/2024/cg_mq/6- Junho/18.jpeg"] },
            { data: "19/06/2024", captura: ["capturas/Metas produção/Unidade 1/2024/cg_mq/6- Junho/19.jpeg"] },
            { data: "20/06/2024", captura: ["capturas/Metas produção/Unidade 1/2024/cg_mq/6- Junho/20.jpeg"] },
            { data: "21/06/2024", captura: ["capturas/Metas produção/Unidade 1/2024/cg_mq/6- Junho/21.jpeg"] },
            { data: "24/06/2024", captura: ["capturas/Metas produção/Unidade 1/2024/cg_mq/6- Junho/24.jpeg"] },
            { data: "25/06/2024", captura: ["capturas/Metas produção/Unidade 1/2024/cg_mq/6- Junho/25.jpeg"] },
            { data: "26/06/2024", captura: ["capturas/Metas produção/Unidade 1/2024/cg_mq/6- Junho/26.jpeg"] },
            { data: "27/06/2024", captura: ["capturas/Metas produção/Unidade 1/2024/cg_mq/6- Junho/27.jpeg"] },
            { data: "28/06/2024", captura: ["capturas/Metas produção/Unidade 1/2024/cg_mq/6- Junho/28.jpeg"] },
            { data: "01/07/2024", captura: ["capturas/Metas produção/Unidade 1/2024/cg_mq/7- Julho/1.jpeg"] },
            { data: "02/07/2024", captura: ["capturas/Metas produção/Unidade 1/2024/cg_mq/7- Julho/2.jpeg"] },
            { data: "04/07/2024", captura: ["capturas/Metas produção/Unidade 1/2024/cg_mq/7- Julho/4.jpeg"] },
            { data: "05/07/2024", captura: ["capturas/Metas produção/Unidade 1/2024/cg_mq/7- Julho/5.jpeg"] },
            { data: "08/07/2024", captura: ["capturas/Metas produção/Unidade 1/2024/cg_mq/7- Julho/8.jpeg"] },
            { data: "09/07/2024", captura: ["capturas/Metas produção/Unidade 1/2024/cg_mq/7- Julho/9.jpeg"] },
            { data: "14/07/2024", captura: ["capturas/Metas produção/Unidade 1/2024/cg_mq/7- Julho/14.jpeg"] },
            { data: "15/07/2024", captura: ["capturas/Metas produção/Unidade 1/2024/cg_mq/7- Julho/15.jpeg"] },
            { data: "16/07/2024", captura: ["capturas/Metas produção/Unidade 1/2024/cg_mq/7- Julho/16.jpeg"] },
            { data: "24/07/2024", captura: ["capturas/Metas produção/Unidade 1/2024/cg_mq/7- Julho/24.jpeg"] },
            { data: "25/07/2024", captura: ["capturas/Metas produção/Unidade 1/2024/cg_mq/7- Julho/25.jpeg"] },
            { data: "26/07/2024", captura: ["capturas/Metas produção/Unidade 1/2024/cg_mq/7- Julho/26.jpeg"] },
            { data: "29/07/2024", captura: ["capturas/Metas produção/Unidade 1/2024/cg_mq/7- Julho/29.jpeg"] },
            { data: "30/07/2024", captura: ["capturas/Metas produção/Unidade 1/2024/cg_mq/7- Julho/30.jpeg"] },

            { data: "01/08/2024", captura: ["capturas/Metas produção/Unidade 1/2024/cg_mq/8- Agosto/1.jpeg"] },
            { data: "02/08/2024", captura: ["capturas/Metas produção/Unidade 1/2024/cg_mq/8- Agosto/2.jpeg"] },
            { data: "05/08/2024", captura: ["capturas/Metas produção/Unidade 1/2024/cg_mq/8- Agosto/5.jpeg"] },
            { data: "06/08/2024", captura: ["capturas/Metas produção/Unidade 1/2024/cg_mq/8- Agosto/6.jpeg"] },


            // { data: "", captura: [""] },
            // { data: "", captura: [""] },
        ],

        plan_un1: [
            { data: "25/01/2024", captura: ["capturas/Metas produção/Unidade 1/2024/planejamento/planejamento_1.jpeg"] },
            { data: "02/02/2024", captura: ["capturas/Metas produção/Unidade 1/2024/planejamento/planejamento_2.jpg"] },
            { data: "07/02/2024", captura: ["capturas/Metas produção/Unidade 1/2024/planejamento/planejamento_3.jpg"] },
            { data: "21/02/2024", captura: ["capturas/Metas produção/Unidade 1/2024/planejamento/planejamento_4.jpg"] },
            { data: "28/02/2024", captura: ["capturas/Metas produção/Unidade 1/2024/planejamento/planejamento_5.jpg"] },
            { data: "06/03/2024", captura: ["capturas/Metas produção/Unidade 1/2024/planejamento/planejamento_6.jpeg"] },
            { data: "15/03/2024", captura: ["capturas/Metas produção/Unidade 1/2024/planejamento/planejamento_7.jpeg"] },
            { data: "20/03/2024", captura: ["capturas/Metas produção/Unidade 1/2024/planejamento/planejamento_8.jpeg"] },
            { data: "25/03/2024", captura: ["capturas/Metas produção/Unidade 1/2024/planejamento/planejamento_9.jpeg"] },
            { data: "04/04/2024", captura: ["capturas/Metas produção/Unidade 1/2024/planejamento/planejamento_10.jpeg"] },
            { data: "10/04/2024", captura: ["capturas/Metas produção/Unidade 1/2024/planejamento/planejamento_11.jpeg"] },
            { data: "16/04/2024", captura: ["capturas/Metas produção/Unidade 1/2024/planejamento/planejamento_12.jpeg"] },
            { data: "18/04/2024", captura: ["capturas/Metas produção/Unidade 1/2024/planejamento/planejamento_13.jpeg"] },
            { data: "19/04/2024", captura: ["capturas/Metas produção/Unidade 1/2024/planejamento/planejamento_14.jpeg"] },
            { data: "02/05/2024", captura: ["capturas/Metas produção/Unidade 1/2024/planejamento/planejamento_15.jpeg"] },
            { data: "08/05/2024", captura: ["capturas/Metas produção/Unidade 1/2024/planejamento/planejamento_16.jpeg"] },
            { data: "03/06/2024", captura: ["capturas/Metas produção/Unidade 1/2024/planejamento/planejamento_17.jpeg"] },
            { data: "04/06/2024", captura: ["capturas/Metas produção/Unidade 1/2024/planejamento/planejamento_18.jpeg"] },
            { data: "19/06/2024", captura: ["capturas/Metas produção/Unidade 1/2024/planejamento/planejamento_19.jpeg"] },
            { data: "09/07/2024", captura: ["capturas/Metas produção/Unidade 1/2024/planejamento/planejamento_20.jpeg"] },
            { data: "18/07/2024", captura: ["capturas/Metas produção/Unidade 1/2024/planejamento/planejamento_21.jpeg"] },
            { data: "24/07/2024", captura: ["capturas/Metas produção/Unidade 1/2024/planejamento/planejamento_22.jpeg"] },


            // { data: "", captura: [""] },
            // { data: "", captura: [""] },
        ],
    },

    MU2: {
        cg_mq_acab: [

            // { data: "", captura: ["", "", ""] },
            // { data: "", captura: ["", "", ""] },
        ],

        cg_mq_emba: [

            // { data: "", captura: [""] },
            // { data: "", captura: [""] },
        ],

        cg_mq_esto: [

            // { data: "", captura: [""] },
        ],

        quadroMetas: [

            { data: "29/04/2024", captura: ["capturas/Metas produção/Unidade 2/2024/QuadroMetas/4- Abril/29.png"] },
            { data: "30/04/2024", captura: ["capturas/Metas produção/Unidade 2/2024/QuadroMetas/4- Abril/30.png"] },
            { data: "02/05/2024", captura: ["capturas/Metas produção/Unidade 2/2024/QuadroMetas/5- Maio/2.png"] },
            { data: "07/05/2024", captura: ["capturas/Metas produção/Unidade 2/2024/QuadroMetas/5- Maio/7.png"] },
            { data: "09/05/2024", captura: ["capturas/Metas produção/Unidade 2/2024/QuadroMetas/5- Maio/9.png"] },
            { data: "10/05/2024", captura: ["capturas/Metas produção/Unidade 2/2024/QuadroMetas/5- Maio/10.png"] },
            { data: "13/05/2024", captura: ["capturas/Metas produção/Unidade 2/2024/QuadroMetas/5- Maio/13.png"] },
            { data: "14/05/2024", captura: ["capturas/Metas produção/Unidade 2/2024/QuadroMetas/5- Maio/14.png"] },
            { data: "15/05/2024", captura: ["capturas/Metas produção/Unidade 2/2024/QuadroMetas/5- Maio/15.png"] },
            { data: "16/05/2024", captura: ["capturas/Metas produção/Unidade 2/2024/QuadroMetas/5- Maio/16.png"] },
            { data: "20/05/2024", captura: ["capturas/Metas produção/Unidade 2/2024/QuadroMetas/5- Maio/20.png"] },
            { data: "21/05/2024", captura: ["capturas/Metas produção/Unidade 2/2024/QuadroMetas/5- Maio/21.png"] },
            { data: "22/05/2024", captura: ["capturas/Metas produção/Unidade 2/2024/QuadroMetas/5- Maio/22.png"] },
            { data: "30/05/2024", captura: ["capturas/Metas produção/Unidade 2/2024/QuadroMetas/5- Maio/30.png"] },

            { data: "05/06/2024", captura: ["capturas/Metas produção/Unidade 2/2024/QuadroMetas/6- Junho/5.png"] },
            { data: "06/06/2024", captura: ["capturas/Metas produção/Unidade 2/2024/QuadroMetas/6- Junho/6.png"] },
            { data: "10/06/2024", captura: ["capturas/Metas produção/Unidade 2/2024/QuadroMetas/6- Junho/10.png"] },
            { data: "11/06/2024", captura: ["capturas/Metas produção/Unidade 2/2024/QuadroMetas/6- Junho/11.png"] },

            
            // { data: "", captura: [""] },
            // { data: "", captura: [""] },
        ],
    },

    MU3: {
        cg_mq3: [

            // { data: "", captura: [""] },
        ],
    },

    MU4: {
        cg_mq4: [

            { data: "05/06/2024", captura: ["capturas/Metas produção/Unidade 4/2024/cg_mq/6- Junho/3-pt1.jpeg"] },
            { data: "04/06/2024", captura: ["capturas/Metas produção/Unidade 4/2024/cg_mq/6- Junho/4-pt1.jpeg", "capturas/Metas produção/Unidade 4/2024/cg_mq/6- Junho/4-pt2.jpeg"] },
            { data: "05/06/2024", captura: ["capturas/Metas produção/Unidade 4/2024/cg_mq/6- Junho/5-pt1.jpeg", "capturas/Metas produção/Unidade 4/2024/cg_mq/6- Junho/5-pt2.jpeg"] },
            { data: "06/06/2024", captura: ["capturas/Metas produção/Unidade 4/2024/cg_mq/6- Junho/6-pt1.jpeg"] },
            { data: "07/06/2024", captura: ["capturas/Metas produção/Unidade 4/2024/cg_mq/6- Junho/7-pt1.jpeg", "capturas/Metas produção/Unidade 4/2024/cg_mq/6- Junho/7-pt2.jpeg"] },
            { data: "10/06/2024", captura: ["capturas/Metas produção/Unidade 4/2024/cg_mq/6- Junho/10-pt1.jpeg", "capturas/Metas produção/Unidade 4/2024/cg_mq/6- Junho/10-pt2.jpeg"] },
            { data: "11/06/2024", captura: ["capturas/Metas produção/Unidade 4/2024/cg_mq/6- Junho/11-pt1.jpeg", "capturas/Metas produção/Unidade 4/2024/cg_mq/6- Junho/11-pt2.jpeg"] },
            { data: "12/06/2024", captura: ["capturas/Metas produção/Unidade 4/2024/cg_mq/6- Junho/12-pt1.jpeg"] },
            { data: "13/06/2024", captura: ["capturas/Metas produção/Unidade 4/2024/cg_mq/6- Junho/13-pt1.jpeg", "capturas/Metas produção/Unidade 4/2024/cg_mq/6- Junho/13-pt2.jpeg"] },
            { data: "14/06/2024", captura: ["capturas/Metas produção/Unidade 4/2024/cg_mq/6- Junho/14-pt1.jpeg", "capturas/Metas produção/Unidade 4/2024/cg_mq/6- Junho/14-pt2.jpeg"] },
            { data: "15/06/2024", captura: ["capturas/Metas produção/Unidade 4/2024/cg_mq/6- Junho/15-pt1.jpeg"] },
            { data: "17/06/2024", captura: ["capturas/Metas produção/Unidade 4/2024/cg_mq/6- Junho/17-pt1.jpeg"] },
            { data: "18/06/2024", captura: ["capturas/Metas produção/Unidade 4/2024/cg_mq/6- Junho/18-pt1.jpeg"] },
            { data: "19/06/2024", captura: ["capturas/Metas produção/Unidade 4/2024/cg_mq/6- Junho/19-pt1.jpeg"] },
            { data: "20/06/2024", captura: ["capturas/Metas produção/Unidade 4/2024/cg_mq/6- Junho/20-pt1.jpeg", "capturas/Metas produção/Unidade 4/2024/cg_mq/6- Junho/20-pt2.jpeg"] },
            { data: "21/06/2024", captura: ["capturas/Metas produção/Unidade 4/2024/cg_mq/6- Junho/21-pt1.jpeg", "capturas/Metas produção/Unidade 4/2024/cg_mq/6- Junho/21-pt2.jpeg"] },
            { data: "24/06/2024", captura: ["capturas/Metas produção/Unidade 4/2024/cg_mq/6- Junho/24-pt1.jpeg", "capturas/Metas produção/Unidade 4/2024/cg_mq/6- Junho/24-pt2.jpeg"] },
            { data: "25/06/2024", captura: ["capturas/Metas produção/Unidade 4/2024/cg_mq/6- Junho/25-pt1.jpeg", "capturas/Metas produção/Unidade 4/2024/cg_mq/6- Junho/25-pt2.jpeg"] },
            { data: "26/06/2024", captura: ["capturas/Metas produção/Unidade 4/2024/cg_mq/6- Junho/26-pt1.jpeg", "capturas/Metas produção/Unidade 4/2024/cg_mq/6- Junho/26-pt2.jpeg"] },
            { data: "27/06/2024", captura: ["capturas/Metas produção/Unidade 4/2024/cg_mq/6- Junho/27-pt1.jpeg", "capturas/Metas produção/Unidade 4/2024/cg_mq/6- Junho/27-pt2.jpeg"] },
            { data: "28/06/2024", captura: ["capturas/Metas produção/Unidade 4/2024/cg_mq/6- Junho/28-pt1.jpeg", "capturas/Metas produção/Unidade 4/2024/cg_mq/6- Junho/28-pt2.jpeg"] },

            { data: "04/07/2024", captura: ["capturas/Metas produção/Unidade 4/2024/cg_mq/7- Julho/4-pt1.jpeg", "capturas/Metas produção/Unidade 4/2024/cg_mq/7- Julho/4-pt2.jpeg"] },
            { data: "05/07/2024", captura: ["capturas/Metas produção/Unidade 4/2024/cg_mq/7- Julho/5-pt1.jpeg"] },
            { data: "08/07/2024", captura: ["capturas/Metas produção/Unidade 4/2024/cg_mq/7- Julho/8-pt1.jpeg"] },
            { data: "09/07/2024", captura: ["capturas/Metas produção/Unidade 4/2024/cg_mq/7- Julho/9-pt1.jpeg"] },
            { data: "10/07/2024", captura: ["capturas/Metas produção/Unidade 4/2024/cg_mq/7- Julho/10-pt1.jpeg", "capturas/Metas produção/Unidade 4/2024/cg_mq/7- Julho/10-pt2.jpeg"] },
            { data: "11/07/2024", captura: ["capturas/Metas produção/Unidade 4/2024/cg_mq/7- Julho/11-pt1.jpeg", "capturas/Metas produção/Unidade 4/2024/cg_mq/7- Julho/11-pt2.jpeg"] },
            { data: "15/07/2024", captura: ["capturas/Metas produção/Unidade 4/2024/cg_mq/7- Julho/15-pt1.jpeg", "capturas/Metas produção/Unidade 4/2024/cg_mq/7- Julho/15-pt2.jpeg"] },
            { data: "16/07/2024", captura: ["capturas/Metas produção/Unidade 4/2024/cg_mq/7- Julho/16-pt1.jpeg"] },
            { data: "17/07/2024", captura: ["capturas/Metas produção/Unidade 4/2024/cg_mq/7- Julho/17-pt1.jpeg"] },
            { data: "18/07/2024", captura: ["capturas/Metas produção/Unidade 4/2024/cg_mq/7- Julho/18-pt1.jpeg"] },
            { data: "19/07/2024", captura: ["capturas/Metas produção/Unidade 4/2024/cg_mq/7- Julho/19-pt1.jpeg", "capturas/Metas produção/Unidade 4/2024/cg_mq/7- Julho/19-pt2.jpeg"] },
            { data: "22/07/2024", captura: ["capturas/Metas produção/Unidade 4/2024/cg_mq/7- Julho/22-pt1.jpeg", "capturas/Metas produção/Unidade 4/2024/cg_mq/7- Julho/22-pt2.jpeg"] },
            { data: "23/07/2024", captura: ["capturas/Metas produção/Unidade 4/2024/cg_mq/7- Julho/23-pt1.jpeg"] },
            { data: "24/07/2024", captura: ["capturas/Metas produção/Unidade 4/2024/cg_mq/7- Julho/24-pt1.jpeg", "capturas/Metas produção/Unidade 4/2024/cg_mq/7- Julho/24-pt2.jpeg"] },
            { data: "25/07/2024", captura: ["capturas/Metas produção/Unidade 4/2024/cg_mq/7- Julho/25-pt1.jpeg", "capturas/Metas produção/Unidade 4/2024/cg_mq/7- Julho/25-pt2.jpeg"] },
            { data: "26/07/2024", captura: ["capturas/Metas produção/Unidade 4/2024/cg_mq/7- Julho/26-pt1.jpeg", "capturas/Metas produção/Unidade 4/2024/cg_mq/7- Julho/26-pt2.jpeg"] },
            { data: "29/07/2024", captura: ["capturas/Metas produção/Unidade 4/2024/cg_mq/7- Julho/29-pt1.jpeg", "capturas/Metas produção/Unidade 4/2024/cg_mq/7- Julho/29-pt2.jpeg"] },
            { data: "30/07/2024", captura: ["capturas/Metas produção/Unidade 4/2024/cg_mq/7- Julho/30-pt1.jpeg", "capturas/Metas produção/Unidade 4/2024/cg_mq/7- Julho/30-pt2.jpeg"] },

            { data: "01/08/2024", captura: ["capturas/Metas produção/Unidade 4/2024/cg_mq/8- Agosto/1-pt1.jpeg", "capturas/Metas produção/Unidade 4/2024/cg_mq/8- Agosto/1-pt2.jpeg"] },


            // { data: "", captura: ["", ""] },
            // { data: "", captura: ["", ""] },
        ],
    },

    MU5: {
        cg_mq5: [

            // { data: "", captura: ["",] },
        ],
    },

    // Tempo parado:

    TP1: {
        CNC_1: [
            { data: "30/11/2023", captura: ["capturas/Unidade 1/Tempo_parado/11- Novembro/tp_un1-s4-1.png", "capturas/Unidade 1/Tempo_parado/11- Novembro/tp_un1-s4-2.png", "capturas/Unidade 1/Tempo_parado/11- Novembro/tp_un1-s4-3.png", "capturas/Unidade 1/Tempo_parado/11- Novembro/tp_un1-s4-4.png"] },

           { data: "09/12/2023", captura: ["capturas/Unidade 1/Tempo_parado/12- Dezembro/s2-pt1.png", "capturas/Unidade 1/Tempo_parado/12- Dezembro/s2-pt2.png", "capturas/Unidade 1/Tempo_parado/12- Dezembro/s2-pt3.png", "capturas/Unidade 1/Tempo_parado/12- Dezembro/s2-pt4.png"] },

            { data: "20/01/2024", captura: ["capturas/Unidade 1/Tempo_parado/2024/1- Janeiro/20-pt-1.png", "capturas/Unidade 1/Tempo_parado/2024/1- Janeiro/20-pt-2.png"] },

            { data: "19/03/2024", captura: ["capturas/Unidade 1/Tempo_parado/2024/3- Março/s2/1.png", "capturas/Unidade 1/Tempo_parado/2024/3- Março/s2/2.png", "capturas/Unidade 1/Tempo_parado/2024/3- Março/s2/3.png", "capturas/Unidade 1/Tempo_parado/2024/3- Março/s2/4.png"] },

            { data: "30/04/2024", captura: ["capturas/Unidade 1/Tempo_parado/2024/4- Abril/sem5-pt1.png", "capturas/Unidade 1/Tempo_parado/2024/4- Abril/sem5-pt2.png", "capturas/Unidade 1/Tempo_parado/2024/4- Abril/sem5-pt3.png", "capturas/Unidade 1/Tempo_parado/2024/4- Abril/sem5-pt4.png"] },

            { data: "03/05/2024", captura: ["capturas/Unidade 1/Tempo_parado/2024/5- Maio/sem1-pt1.png", "capturas/Unidade 1/Tempo_parado/2024/5- Maio/sem1-pt2.png", "capturas/Unidade 1/Tempo_parado/2024/5- Maio/sem1-pt3.png", "capturas/Unidade 1/Tempo_parado/2024/5- Maio/sem1-pt4.png"] },
            { data: "13/05/2024", captura: ["capturas/Unidade 1/2024/5- Maio/TempoParado/sem2-pt1.png", "capturas/Unidade 1/2024/5- Maio/TempoParado/sem2-pt2.png", "capturas/Unidade 1/2024/5- Maio/TempoParado/sem2-pt3.png", "capturas/Unidade 1/2024/5- Maio/TempoParado/sem2-pt4.png"] },
            { data: "20/05/2024", captura: ["capturas/Unidade 1/2024/5- Maio/TempoParado/sem3-pt1.png", "capturas/Unidade 1/2024/5- Maio/TempoParado/sem3-pt2.png", "capturas/Unidade 1/2024/5- Maio/TempoParado/sem3-pt3.png", "capturas/Unidade 1/2024/5- Maio/TempoParado/sem3-pt4.png"] },
            { data: "24/05/2024", captura: ["capturas/Unidade 1/2024/5- Maio/TempoParado/sem4-pt1.png", "capturas/Unidade 1/2024/5- Maio/TempoParado/sem4-pt2.png", "capturas/Unidade 1/2024/5- Maio/TempoParado/sem4-pt3.png", "capturas/Unidade 1/2024/5- Maio/TempoParado/sem4-pt4.png"] },


            // { data: "", captura: ["", "", "", ""] },
            // { data: "", captura: ["", "", "", ""] },
        ],
    },

    TP2: {
        CNC_2: [
            { data: "30/11/2023", captura: ["capturas/Unidade 2/Tempo_parado/11- Novembro/s4_1.png", "capturas/Unidade 2/Tempo_parado/11- Novembro/s4_2.png", "capturas/Unidade 2/Tempo_parado/11- Novembro/s4_3.png", "capturas/Unidade 2/Tempo_parado/11- Novembro/s4_4.png", "capturas/Unidade 2/Tempo_parado/11- Novembro/s4_5.png", "capturas/Unidade 2/Tempo_parado/11- Novembro/s4_6.png", "capturas/Unidade 2/Tempo_parado/11- Novembro/s4_7.png"] },

            { data: "09/12/2023", captura: ["capturas/Unidade 2/Tempo_parado/12- Dezembro/s2-pt1.png", "capturas/Unidade 2/Tempo_parado/12- Dezembro/s2-pt2.png", "capturas/Unidade 2/Tempo_parado/12- Dezembro/s2-pt3.png", "capturas/Unidade 2/Tempo_parado/12- Dezembro/s2-pt4.png", "capturas/Unidade 2/Tempo_parado/12- Dezembro/s2-pt5.png", "capturas/Unidade 2/Tempo_parado/12- Dezembro/s2-pt6.png", "capturas/Unidade 2/Tempo_parado/12- Dezembro/s2-pt7.png", "capturas/Unidade 2/Tempo_parado/12- Dezembro/s2-pt8.png"] },

            { data: "20/01/2024", captura: ["capturas/Unidade 2/Tempo_parado/2024/1- Janeiro/sem2-pt1.png", "capturas/Unidade 2/Tempo_parado/2024/1- Janeiro/sem2-pt2.png", "capturas/Unidade 2/Tempo_parado/2024/1- Janeiro/sem2-pt3.png", "capturas/Unidade 2/Tempo_parado/2024/1- Janeiro/sem2-pt4.png", "capturas/Unidade 2/Tempo_parado/2024/1- Janeiro/sem2-pt5.png", "capturas/Unidade 2/Tempo_parado/2024/1- Janeiro/sem2-pt6.png", "capturas/Unidade 2/Tempo_parado/2024/1- Janeiro/sem2-pt7.png"] },
            
            { data: "29/04/2024", captura: ["capturas/Unidade 2/Tempo_parado/2024/4- Abril/sem5-pt1.png", "capturas/Unidade 2/Tempo_parado/2024/4- Abril/sem5-pt2.png", "capturas/Unidade 2/Tempo_parado/2024/4- Abril/sem5-pt3.png", "capturas/Unidade 2/Tempo_parado/2024/4- Abril/sem5-pt4.png", "capturas/Unidade 2/Tempo_parado/2024/4- Abril/sem5-pt5.png", "capturas/Unidade 2/Tempo_parado/2024/4- Abril/sem5-pt6.png", "capturas/Unidade 2/Tempo_parado/2024/4- Abril/sem5-pt7.png", "capturas/Unidade 2/Tempo_parado/2024/4- Abril/sem5-pt8.png", "capturas/Unidade 2/Tempo_parado/2024/4- Abril/sem5-pt9.png"] },

            { data: "03/05/2024", captura: ["capturas/Unidade 2/Tempo_parado/2024/5- Maio/sem1-pt1.png", "capturas/Unidade 2/Tempo_parado/2024/5- Maio/sem1-pt2.png", "capturas/Unidade 2/Tempo_parado/2024/5- Maio/sem1-pt3.png", "capturas/Unidade 2/Tempo_parado/2024/5- Maio/sem1-pt4.png", "capturas/Unidade 2/Tempo_parado/2024/5- Maio/sem1-pt5.png", "capturas/Unidade 2/Tempo_parado/2024/5- Maio/sem1-pt6.png", "capturas/Unidade 2/Tempo_parado/2024/5- Maio/sem1-pt7.png", "capturas/Unidade 2/Tempo_parado/2024/5- Maio/sem1-pt8.png", "capturas/Unidade 2/Tempo_parado/2024/5- Maio/sem1-pt9.png"] },
            { data: "13/05/2024", captura: ["capturas/Unidade 2/Tempo_parado/2024/5- Maio/sem2-pt1.png", "capturas/Unidade 2/Tempo_parado/2024/5- Maio/sem2-pt2.png", "capturas/Unidade 2/Tempo_parado/2024/5- Maio/sem2-pt3.png", "capturas/Unidade 2/Tempo_parado/2024/5- Maio/sem2-pt4.png", "capturas/Unidade 2/Tempo_parado/2024/5- Maio/sem2-pt5.png", "capturas/Unidade 2/Tempo_parado/2024/5- Maio/sem2-pt6.png", "capturas/Unidade 2/Tempo_parado/2024/5- Maio/sem2-pt7.png", "capturas/Unidade 2/Tempo_parado/2024/5- Maio/sem2-pt8.png"] },
            { data: "20/05/2024", captura: ["capturas/Unidade 2/Tempo_parado/2024/5- Maio/sem3-pt1.png", "capturas/Unidade 2/Tempo_parado/2024/5- Maio/sem3-pt2.png", "capturas/Unidade 2/Tempo_parado/2024/5- Maio/sem3-pt3.png", "capturas/Unidade 2/Tempo_parado/2024/5- Maio/sem3-pt4.png", "capturas/Unidade 2/Tempo_parado/2024/5- Maio/sem3-pt5.png", "capturas/Unidade 2/Tempo_parado/2024/5- Maio/sem3-pt6.png", "capturas/Unidade 2/Tempo_parado/2024/5- Maio/sem3-pt7.png", "capturas/Unidade 2/Tempo_parado/2024/5- Maio/sem3-pt8.png", "capturas/Unidade 2/Tempo_parado/2024/5- Maio/sem3-pt9.png"] },
            { data: "30/05/2024", captura: ["capturas/Unidade 2/Tempo_parado/2024/5- Maio/sem5-pt1.png", "capturas/Unidade 2/Tempo_parado/2024/5- Maio/sem5-pt2.png", "capturas/Unidade 2/Tempo_parado/2024/5- Maio/sem5-pt3.png", "capturas/Unidade 2/Tempo_parado/2024/5- Maio/sem5-pt4.png", "capturas/Unidade 2/Tempo_parado/2024/5- Maio/sem5-pt5.png", "capturas/Unidade 2/Tempo_parado/2024/5- Maio/sem5-pt6.png", "capturas/Unidade 2/Tempo_parado/2024/5- Maio/sem5-pt7.png", "capturas/Unidade 2/Tempo_parado/2024/5- Maio/sem5-pt8.png", "capturas/Unidade 2/Tempo_parado/2024/5- Maio/sem5-pt9.png"] },
            { data: "03/06/2024", captura: ["capturas/Unidade 2/Tempo_parado/2024/6- Junho/s1-pt1.png", "capturas/Unidade 2/Tempo_parado/2024/6- Junho/s1-pt2.png", "capturas/Unidade 2/Tempo_parado/2024/6- Junho/s1-pt3.png", "capturas/Unidade 2/Tempo_parado/2024/6- Junho/s1-pt4.png", "capturas/Unidade 2/Tempo_parado/2024/6- Junho/s1-pt5.png", "capturas/Unidade 2/Tempo_parado/2024/6- Junho/s1-pt6.png", "capturas/Unidade 2/Tempo_parado/2024/6- Junho/s1-pt7.png", "capturas/Unidade 2/Tempo_parado/2024/6- Junho/s1-pt8.png", "capturas/Unidade 2/Tempo_parado/2024/6- Junho/s1-pt9.png"] },
            { data: "05/06/2024", captura: ["capturas/Unidade 2/Tempo_parado/2024/6- Junho/s2-pt1.png", "capturas/Unidade 2/Tempo_parado/2024/6- Junho/s2-pt2.png", "capturas/Unidade 2/Tempo_parado/2024/6- Junho/s2-pt3.png", "capturas/Unidade 2/Tempo_parado/2024/6- Junho/s2-pt4.png", "capturas/Unidade 2/Tempo_parado/2024/6- Junho/s2-pt5.png", "capturas/Unidade 2/Tempo_parado/2024/6- Junho/s2-pt6.png", "capturas/Unidade 2/Tempo_parado/2024/6- Junho/s2-pt7.png", "capturas/Unidade 2/Tempo_parado/2024/6- Junho/s2-pt8.png", "capturas/Unidade 2/Tempo_parado/2024/6- Junho/s2-pt9.png"] },
            { data: "13/06/2024", captura: ["capturas/Unidade 2/Tempo_parado/2024/6- Junho/s3-pt1.png", "capturas/Unidade 2/Tempo_parado/2024/6- Junho/s3-pt2.png", "capturas/Unidade 2/Tempo_parado/2024/6- Junho/s3-pt3.png", "capturas/Unidade 2/Tempo_parado/2024/6- Junho/s3-pt4.png", "capturas/Unidade 2/Tempo_parado/2024/6- Junho/s3-pt5.png", "capturas/Unidade 2/Tempo_parado/2024/6- Junho/s3-pt6.png", "capturas/Unidade 2/Tempo_parado/2024/6- Junho/s3-pt7.png", "capturas/Unidade 2/Tempo_parado/2024/6- Junho/s3-pt8.png", "capturas/Unidade 2/Tempo_parado/2024/6- Junho/s3-pt9.png"] },
            { data: "26/06/2024", captura: ["capturas/Unidade 2/Tempo_parado/2024/6- Junho/s4-pt1.png", "capturas/Unidade 2/Tempo_parado/2024/6- Junho/s4-pt2.png", "capturas/Unidade 2/Tempo_parado/2024/6- Junho/s4-pt3.png", "capturas/Unidade 2/Tempo_parado/2024/6- Junho/s4-pt4.png", "capturas/Unidade 2/Tempo_parado/2024/6- Junho/s4-pt5.png", "capturas/Unidade 2/Tempo_parado/2024/6- Junho/s4-pt6.png", "capturas/Unidade 2/Tempo_parado/2024/6- Junho/s4-pt7.png", "capturas/Unidade 2/Tempo_parado/2024/6- Junho/s4-pt8.png", "capturas/Unidade 2/Tempo_parado/2024/6- Junho/s4-pt9.png", "capturas/Unidade 2/Tempo_parado/2024/6- Junho/s4-pt10.png"] },
            { data: "03/07/2024", captura: ["capturas/Unidade 2/Tempo_parado/2024/6- Junho/s5-pt1.png", "capturas/Unidade 2/Tempo_parado/2024/6- Junho/s5-pt2.png", "capturas/Unidade 2/Tempo_parado/2024/6- Junho/s5-pt3.png", "capturas/Unidade 2/Tempo_parado/2024/6- Junho/s5-pt4.png", "capturas/Unidade 2/Tempo_parado/2024/6- Junho/s5-pt5.png", "capturas/Unidade 2/Tempo_parado/2024/6- Junho/s5-pt6.png", "capturas/Unidade 2/Tempo_parado/2024/6- Junho/s5-pt7.png", "capturas/Unidade 2/Tempo_parado/2024/6- Junho/s5-pt8.png"] },


            // { data: "", captura: ["", "", "", "", "", "", "", "", "", ""] },
            // { data: "", captura: ["", "", "", "", "", "", "", "", "", ""] },
        ],

        Usinagem: [

            // { data: "", captura: ["", ""] },
            // { data: "", captura: ["", ""] },
        ],
    },

    TP3: {
        Prensas: [

            // { data: "", captura: ["", ""] },
            // { data: "", captura: ["", ""] },
        ],
    },

    TP4: {
        Gabianni: [
            { data: "20/11/2023", captura: ["capturas/Unidade 4/Tempo_parado/11- Novembro/20-25.png",] },
            { data: "18/12/2023", captura: ["capturas/Unidade 4/Tempo_parado/12 Dezembro/18-12.png"] },

            { data: "26/01/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/1- Janeiro/15-01 à 26-01.png"] },
            { data: "21/02/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/2- Fevereiro/Seccionadora/21.png"] },
            { data: "28/03/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/3- Março/28 gabianne março.jpg"] },
            { data: "30/04/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/4- Abril/GABIANNE.jpeg"] },
            { data: "30/05/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/5- Maio/maio gabianne.jpg"] },
            { data: "30/06/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/6- Junho/GABIANNE.jpg"] },


            // { data: "", captura: [""] },
            // { data: "", captura: [""] },
        ],

        Prensas: [

            { data: "03/06/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/6- Junho/03 maquimovel.jpg", "capturas/Unidade 4/Tempo_parado/2024/6- Junho/03 italpresse.jpg"] },
            { data: "04/06/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/6- Junho/4 maquimovel.jpg", "capturas/Unidade 4/Tempo_parado/2024/6- Junho/4 italpresse.jpg"] },
            { data: "05/06/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/6- Junho/5 maquimovel.jpg", "capturas/Unidade 4/Tempo_parado/2024/6- Junho/5 italpresse.jpg"] },
            { data: "06/06/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/6- Junho/6 maquimovel.jpg", "capturas/Unidade 4/Tempo_parado/2024/6- Junho/6 italpresse.jpg"] },
            { data: "07/06/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/6- Junho/7 maquimovel.jpg", "capturas/Unidade 4/Tempo_parado/2024/6- Junho/7 italpresse.jpg"] },
            { data: "08/06/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/6- Junho/8 italpresse.jpg"] },
            { data: "10/06/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/6- Junho/10 maquimovel.jpg", "capturas/Unidade 4/Tempo_parado/2024/6- Junho/10 italpresse.jpg"] },
            { data: "11/06/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/6- Junho/11 maquimovel.jpg", "capturas/Unidade 4/Tempo_parado/2024/6- Junho/11 italpresse.jpg"] },
            { data: "12/06/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/6- Junho/12 maquimovel.jpg", "capturas/Unidade 4/Tempo_parado/2024/6- Junho/12 italpresse.jpg"] },
            { data: "13/06/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/6- Junho/13 maquimovel.jpg", "capturas/Unidade 4/Tempo_parado/2024/6- Junho/13 italpresse.jpg"] },
            { data: "14/06/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/6- Junho/14 maquimovel.jpg", "capturas/Unidade 4/Tempo_parado/2024/6- Junho/14 italpresse.jpg"] },
            { data: "15/06/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/6- Junho/15 maquimovel.jpg", "capturas/Unidade 4/Tempo_parado/2024/6- Junho/15 italpresse.jpg"] },
            { data: "17/06/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/6- Junho/17 maquimovel.jpg", "capturas/Unidade 4/Tempo_parado/2024/6- Junho/17 italpresse.jpg"] },
            { data: "18/06/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/6- Junho/18 maquimovel.jpg", "capturas/Unidade 4/Tempo_parado/2024/6- Junho/18 italpresse.jpg"] },
            { data: "19/06/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/6- Junho/19 maquimovel.jpg", "capturas/Unidade 4/Tempo_parado/2024/6- Junho/19 italpresse.jpg"] },
            { data: "20/06/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/6- Junho/20 maquimovel.jpg", "capturas/Unidade 4/Tempo_parado/2024/6- Junho/20 italpresse.jpg"] },
            { data: "21/06/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/6- Junho/21 maquimovel.jpg", "capturas/Unidade 4/Tempo_parado/2024/6- Junho/21 italpresse.jpg"] },
            { data: "24/06/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/6- Junho/24 maquimovel.jpg", "capturas/Unidade 4/Tempo_parado/2024/6- Junho/24 italpresse.jpg"] },
            { data: "27/06/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/6- Junho/27 maquimovel.jpg", "capturas/Unidade 4/Tempo_parado/2024/6- Junho/27 italpresse.jpg"] },

            { data: "01/07/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/7- Julho/01 maquimovel.jpg", "capturas/Unidade 4/Tempo_parado/2024/7- Julho/01 italpresse.jpg"] },
            { data: "02/07/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/7- Julho/02 maquimovel.jpg", "capturas/Unidade 4/Tempo_parado/2024/7- Julho/02 italpresse.jpg"] },
            { data: "04/07/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/7- Julho/04 maquimovel.jpg", "capturas/Unidade 4/Tempo_parado/2024/7- Julho/04 italpresse.jpg"] },
            { data: "05/07/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/7- Julho/05 maquimovel.jpg", "capturas/Unidade 4/Tempo_parado/2024/7- Julho/05 italpresse.jpg"] },
            { data: "15/07/2024", captura: ["capturas/Unidade 4/Tempo_parado/2024/7- Julho/15 maquimovel.jpg", "capturas/Unidade 4/Tempo_parado/2024/7- Julho/15 italpresse.jpg"] },


            // { data: "", captura: ["", ""] },
            // { data: "", captura: ["", ""] },
        ],
    },

    TP5: {
        Gabianni: [

            // { data: "", captura: ["", ""] },
            // { data: "", captura: ["", ""] },
        ],

        Prensas: [

            // { data: "", captura: ["", ""] },
            // { data: "", captura: ["", ""] },
        ],
    },

    // Retrabalhos:

    UR1: {
        Banda_Larga: [
            { data: "25/11/2023", captura: ["capturas/Retrabalhos/unidade 1/banda_larga/11- Novembro/20-25.png"] },
            { data: "02/12/2023", captura: ["capturas/Retrabalhos/unidade 1/banda_larga/11- Novembro/27.png"] },

            { data: "09/12/2023", captura: ["capturas/Retrabalhos/unidade 1/banda_larga/12-Dezembro/semana 04 à 09.png"] },

            { data: "16/12/2023", captura: ["capturas/Retrabalhos/unidade 1/banda_larga/12-Dezembro/11-12 À 15-12.png"] },

            { data: "20/12/2023", captura: ["capturas/Retrabalhos/unidade 1/banda_larga/12-Dezembro/18-12 À 20-12.png"] },

            { data: "12/01/2024", captura: ["capturas/Retrabalhos/unidade 1/banda_larga/2024/1- Janeiro/09-01 À 12-01.png"] },
            { data: "19/01/2024", captura: ["capturas/Retrabalhos/unidade 1/banda_larga/2024/1- Janeiro/15-01 À 19-01.png"] },
            { data: "26/01/2024", captura: ["capturas/Retrabalhos/unidade 1/banda_larga/2024/1- Janeiro/22-01 À 26-01.png"] },
            
            { data: "02/02/2024", captura: ["capturas/Retrabalhos/unidade 1/banda_larga/2024/2- Fevereiro/29-01 à 02-02.png"] },
            { data: "05/02/2024", captura: ["capturas/Retrabalhos/unidade 1/banda_larga/2024/2- Fevereiro/05-07.png"] },
            { data: "23/02/2024", captura: ["capturas/Retrabalhos/unidade 1/banda_larga/2024/2- Fevereiro/19-23.png"] },
            { data: "26/02/2024", captura: ["capturas/Retrabalhos/unidade 1/banda_larga/2024/3- Março/26-02.png"] },

            { data: "07/03/2024", captura: ["capturas/Retrabalhos/unidade 1/banda_larga/2024/3- Março/7.png"] },
            { data: "08/03/2024", captura: ["capturas/Retrabalhos/unidade 1/banda_larga/2024/3- Março/8.png"] },
            { data: "11/03/2024", captura: ["capturas/Retrabalhos/unidade 1/banda_larga/2024/3- Março/11.png"] },
            { data: "15/03/2024", captura: ["capturas/Retrabalhos/unidade 1/banda_larga/2024/3- Março/15.jpg"] },
            { data: "18/03/2024", captura: ["capturas/Retrabalhos/unidade 1/banda_larga/2024/3- Março/18-pt1.png", "capturas/Retrabalhos/unidade 1/banda_larga/2024/3- Março/18-pt2.png", "capturas/Retrabalhos/unidade 1/banda_larga/2024/3- Março/18-pt3.png", "capturas/Retrabalhos/unidade 1/banda_larga/2024/3- Março/18-pt4.png", "capturas/Retrabalhos/unidade 1/banda_larga/2024/3- Março/18-pt5.png", "capturas/Retrabalhos/unidade 1/banda_larga/2024/3- Março/18-pt6.png"] },
            { data: "19/03/2024", captura: ["capturas/Retrabalhos/unidade 1/banda_larga/2024/3- Março/19-pt1.png", "capturas/Retrabalhos/unidade 1/banda_larga/2024/3- Março/19-pt2.png", "capturas/Retrabalhos/unidade 1/banda_larga/2024/3- Março/19-pt3.png", "capturas/Retrabalhos/unidade 1/banda_larga/2024/3- Março/19-pt4.png", "capturas/Retrabalhos/unidade 1/banda_larga/2024/3- Março/19-pt5.png", "capturas/Retrabalhos/unidade 1/banda_larga/2024/3- Março/19-pt6.png"] },
            { data: "20/03/2024", captura: ["capturas/Retrabalhos/unidade 1/banda_larga/2024/3- Março/20-pt1.png", "capturas/Retrabalhos/unidade 1/banda_larga/2024/3- Março/20-pt2.png", "capturas/Retrabalhos/unidade 1/banda_larga/2024/3- Março/20-pt3.png", "capturas/Retrabalhos/unidade 1/banda_larga/2024/3- Março/20-pt4.png", "capturas/Retrabalhos/unidade 1/banda_larga/2024/3- Março/20-pt5.png", "capturas/Retrabalhos/unidade 1/banda_larga/2024/3- Março/20-pt6.png"] },
            { data: "21/03/2024", captura: ["capturas/Retrabalhos/unidade 1/banda_larga/2024/3- Março/21-pt1.png", "capturas/Retrabalhos/unidade 1/banda_larga/2024/3- Março/21-pt2.png", "capturas/Retrabalhos/unidade 1/banda_larga/2024/3- Março/21-pt3.png", "capturas/Retrabalhos/unidade 1/banda_larga/2024/3- Março/21-pt4.png", "capturas/Retrabalhos/unidade 1/banda_larga/2024/3- Março/21-pt5.png", "capturas/Retrabalhos/unidade 1/banda_larga/2024/3- Março/21-pt6.png", "capturas/Retrabalhos/unidade 1/banda_larga/2024/3- Março/21-G.png"] },
            { data: "22/03/2024", captura: ["capturas/Retrabalhos/unidade 1/banda_larga/2024/3- Março/22-pt1.png", "capturas/Retrabalhos/unidade 1/banda_larga/2024/3- Março/21-pt2.png", "capturas/Retrabalhos/unidade 1/banda_larga/2024/3- Março/21-pt3.png", "capturas/Retrabalhos/unidade 1/banda_larga/2024/3- Março/22-pt4.png", "capturas/Retrabalhos/unidade 1/banda_larga/2024/3- Março/21-pt5.png", "capturas/Retrabalhos/unidade 1/banda_larga/2024/3- Março/21-pt6.png", "capturas/Retrabalhos/unidade 1/banda_larga/2024/3- Março/21-G.png"] },
            { data: "25/03/2024", captura: ["capturas/Retrabalhos/unidade 1/banda_larga/2024/3- Março/25-pt1.png", "capturas/Retrabalhos/unidade 1/banda_larga/2024/3- Março/25-pt2.jpeg", "capturas/Retrabalhos/unidade 1/banda_larga/2024/3- Março/25-pt3.png", "capturas/Retrabalhos/unidade 1/banda_larga/2024/3- Março/25-pt4.jpeg", "capturas/Retrabalhos/unidade 1/banda_larga/2024/3- Março/25-G.jpeg"] },
            { data: "26/03/2024", captura: ["capturas/Retrabalhos/unidade 1/banda_larga/2024/3- Março/26-pt1.png", "capturas/Retrabalhos/unidade 1/banda_larga/2024/3- Março/25-pt2.jpeg", "capturas/Retrabalhos/unidade 1/banda_larga/2024/3- Março/26-pt2.png", "capturas/Retrabalhos/unidade 1/banda_larga/2024/3- Março/25-pt4.jpeg", "capturas/Retrabalhos/unidade 1/banda_larga/2024/3- Março/25-G.jpeg"] },
            { data: "27/03/2024", captura: ["capturas/Retrabalhos/unidade 1/banda_larga/2024/3- Março/27-pt1.png", "capturas/Retrabalhos/unidade 1/banda_larga/2024/3- Março/25-pt3.png", "capturas/Retrabalhos/unidade 1/banda_larga/2024/3- Março/27-pt2.png", "capturas/Retrabalhos/unidade 1/banda_larga/2024/3- Março/25-pt4.jpeg", "capturas/Retrabalhos/unidade 1/banda_larga/2024/3- Março/25-G.jpeg"] },
            { data: "28/03/2024", captura: ["capturas/Retrabalhos/unidade 1/banda_larga/2024/3- Março/28-pt1.png", "capturas/Retrabalhos/unidade 1/banda_larga/2024/3- Março/25-pt2.jpeg", "capturas/Retrabalhos/unidade 1/banda_larga/2024/3- Março/28-pt2.png", "capturas/Retrabalhos/unidade 1/banda_larga/2024/3- Março/25-pt4.jpeg", "capturas/Retrabalhos/unidade 1/banda_larga/2024/3- Março/25-G.jpeg"] },

            { data: "01/04/2024", captura: ["capturas/Retrabalhos/unidade 1/banda_larga/2024/4- Abril/1-pt1.png", "capturas/Retrabalhos/unidade 1/banda_larga/2024/4- Abril/1-pt2.jpeg", "capturas/Retrabalhos/unidade 1/banda_larga/2024/4- Abril/1-pt3.png", "capturas/Retrabalhos/unidade 1/banda_larga/2024/4- Abril/1-pt4.jpeg", "capturas/Retrabalhos/unidade 1/banda_larga/2024/4- Abril/1-G.jpeg"] },
            { data: "03/04/2024", captura: ["capturas/Retrabalhos/unidade 1/banda_larga/2024/4- Abril/3-pt1.png", "capturas/Retrabalhos/unidade 1/banda_larga/2024/4- Abril/1-pt2.jpeg", "capturas/Retrabalhos/unidade 1/banda_larga/2024/4- Abril/3-pt3.png", "capturas/Retrabalhos/unidade 1/banda_larga/2024/4- Abril/1-pt4.jpeg", "capturas/Retrabalhos/unidade 1/banda_larga/2024/4- Abril/1-G.jpeg"] },
            { data: "04/04/2024", captura: ["capturas/Retrabalhos/unidade 1/banda_larga/2024/4- Abril/4-pt1.png", "capturas/Retrabalhos/unidade 1/banda_larga/2024/4- Abril/1-pt2.jpeg", "capturas/Retrabalhos/unidade 1/banda_larga/2024/4- Abril/4-pt3.png", "capturas/Retrabalhos/unidade 1/banda_larga/2024/4- Abril/1-pt4.jpeg", "capturas/Retrabalhos/unidade 1/banda_larga/2024/4- Abril/1-G.jpeg"] },
            { data: "05/04/2024", captura: ["capturas/Retrabalhos/unidade 1/banda_larga/2024/4- Abril/5-pt1.png", "capturas/Retrabalhos/unidade 1/banda_larga/2024/4- Abril/1-pt2.jpeg", "capturas/Retrabalhos/unidade 1/banda_larga/2024/4- Abril/5-pt3.png", "capturas/Retrabalhos/unidade 1/banda_larga/2024/4- Abril/1-pt4.jpeg", "capturas/Retrabalhos/unidade 1/banda_larga/2024/4- Abril/1-G.jpeg"] },
            { data: "08/04/2024", captura: ["capturas/Retrabalhos/unidade 1/banda_larga/2024/4- Abril/8-pt1.png", "capturas/Retrabalhos/unidade 1/banda_larga/2024/4- Abril/8-pt2.jpeg", "capturas/Retrabalhos/unidade 1/banda_larga/2024/4- Abril/8-pt3.png", "capturas/Retrabalhos/unidade 1/banda_larga/2024/4- Abril/8-pt4.jpeg", "capturas/Retrabalhos/unidade 1/banda_larga/2024/4- Abril/8-G.jpeg"] },
            { data: "10/04/2024", captura: ["capturas/Retrabalhos/unidade 1/banda_larga/2024/4- Abril/10-pt1.png", "capturas/Retrabalhos/unidade 1/banda_larga/2024/4- Abril/8-pt2.jpeg", "capturas/Retrabalhos/unidade 1/banda_larga/2024/4- Abril/10-pt3.png", "capturas/Retrabalhos/unidade 1/banda_larga/2024/4- Abril/8-pt4.jpeg", "capturas/Retrabalhos/unidade 1/banda_larga/2024/4- Abril/8-G.jpeg"] },
            { data: "12/04/2024", captura: ["capturas/Retrabalhos/unidade 1/banda_larga/2024/4- Abril/12-pt1.png", "capturas/Retrabalhos/unidade 1/banda_larga/2024/4- Abril/8-pt2.jpeg", "capturas/Retrabalhos/unidade 1/banda_larga/2024/4- Abril/12-pt3.png", "capturas/Retrabalhos/unidade 1/banda_larga/2024/4- Abril/8-pt4.jpeg", "capturas/Retrabalhos/unidade 1/banda_larga/2024/4- Abril/8-G.jpeg"] },
            { data: "16/04/2024", captura: ["capturas/Retrabalhos/unidade 1/banda_larga/2024/4- Abril/16-pt1.png", "capturas/Retrabalhos/unidade 1/banda_larga/2024/4- Abril/16-pt2.jpeg", "capturas/Retrabalhos/unidade 1/banda_larga/2024/4- Abril/16-pt3.png", "capturas/Retrabalhos/unidade 1/banda_larga/2024/4- Abril/16-pt4.jpeg", "capturas/Retrabalhos/unidade 1/banda_larga/2024/4- Abril/16-G.jpeg"] },
            { data: "19/04/2024", captura: ["capturas/Retrabalhos/unidade 1/banda_larga/2024/4- Abril/19-pt1.png", "capturas/Retrabalhos/unidade 1/banda_larga/2024/4- Abril/16-pt2.jpeg", "capturas/Retrabalhos/unidade 1/banda_larga/2024/4- Abril/19-pt3.png", "capturas/Retrabalhos/unidade 1/banda_larga/2024/4- Abril/16-pt4.jpeg", "capturas/Retrabalhos/unidade 1/banda_larga/2024/4- Abril/16-G.jpeg"] },
            { data: "26/04/2024", captura: ["capturas/Retrabalhos/unidade 1/banda_larga/2024/4- Abril/26-pt1.png", "capturas/Retrabalhos/unidade 1/banda_larga/2024/4- Abril/26-pt3.png"] },

            { data: "03/05/2024", captura: ["capturas/Retrabalhos/unidade 1/banda_larga/2024/5- Maio/3-pt1.png", "capturas/Retrabalhos/unidade 1/banda_larga/2024/5- Maio/3-pt2.jpeg", "capturas/Retrabalhos/unidade 1/banda_larga/2024/5- Maio/3-pt3.png", "capturas/Retrabalhos/unidade 1/banda_larga/2024/5- Maio/3-pt4.jpeg", "capturas/Retrabalhos/unidade 1/banda_larga/2024/5- Maio/3-g.jpeg"] },
            { data: "06/05/2024", captura: ["capturas/Retrabalhos/unidade 1/banda_larga/2024/5- Maio/6-pt1.png", "capturas/Retrabalhos/unidade 1/banda_larga/2024/5- Maio/6-pt2.jpeg", "capturas/Retrabalhos/unidade 1/banda_larga/2024/5- Maio/6-pt3.png", "capturas/Retrabalhos/unidade 1/banda_larga/2024/5- Maio/6-pt4.jpeg", "capturas/Retrabalhos/unidade 1/banda_larga/2024/5- Maio/6-g.jpeg"] },
            { data: "07/05/2024", captura: ["capturas/Retrabalhos/unidade 1/banda_larga/2024/5- Maio/7-pt1.png", "capturas/Retrabalhos/unidade 1/banda_larga/2024/5- Maio/6-pt2.jpeg", "capturas/Retrabalhos/unidade 1/banda_larga/2024/5- Maio/7-pt3.png", "capturas/Retrabalhos/unidade 1/banda_larga/2024/5- Maio/6-pt4.jpeg", "capturas/Retrabalhos/unidade 1/banda_larga/2024/5- Maio/7-g.jpeg"] },
            { data: "09/05/2024", captura: ["capturas/Retrabalhos/unidade 1/banda_larga/2024/5- Maio/9-pt1.png", "capturas/Retrabalhos/unidade 1/banda_larga/2024/5- Maio/6-pt2.jpeg", "capturas/Retrabalhos/unidade 1/banda_larga/2024/5- Maio/6-pt4.jpeg", "capturas/Retrabalhos/unidade 1/banda_larga/2024/5- Maio/6-g.jpeg"] },
            { data: "10/05/2024", captura: ["capturas/Retrabalhos/unidade 1/banda_larga/2024/5- Maio/10-pt1.png", "capturas/Retrabalhos/unidade 1/banda_larga/2024/5- Maio/6-pt2.jpeg", "capturas/Retrabalhos/unidade 1/banda_larga/2024/5- Maio/6-pt4.jpeg", "capturas/Retrabalhos/unidade 1/banda_larga/2024/5- Maio/9-g.jpeg"] },
            { data: "14/05/2024", captura: ["capturas/Retrabalhos/unidade 1/banda_larga/2024/5- Maio/13-pt1.png", "capturas/Retrabalhos/unidade 1/banda_larga/2024/5- Maio/13-pt2.jpeg", "capturas/Retrabalhos/unidade 1/banda_larga/2024/5- Maio/13-pt3.jpeg", "capturas/Retrabalhos/unidade 1/banda_larga/2024/5- Maio/13-g.jpeg"] },
            { data: "16/05/2024", captura: ["capturas/Retrabalhos/unidade 1/banda_larga/2024/5- Maio/16-pt1.png", "capturas/Retrabalhos/unidade 1/banda_larga/2024/5- Maio/13-pt2.jpeg", "capturas/Retrabalhos/unidade 1/banda_larga/2024/5- Maio/13-pt3.jpeg", "capturas/Retrabalhos/unidade 1/banda_larga/2024/5- Maio/13-g.jpeg"] },
            { data: "17/05/2024", captura: ["capturas/Retrabalhos/unidade 1/banda_larga/2024/5- Maio/17-pt1.png", "capturas/Retrabalhos/unidade 1/banda_larga/2024/5- Maio/13-pt2.jpeg", "capturas/Retrabalhos/unidade 1/banda_larga/2024/5- Maio/13-pt3.jpeg", "capturas/Retrabalhos/unidade 1/banda_larga/2024/5- Maio/13-g.jpeg"] },
            { data: "20/05/2024", captura: ["capturas/Retrabalhos/unidade 1/banda_larga/2024/5- Maio/20-pt1.png", "capturas/Retrabalhos/unidade 1/banda_larga/2024/5- Maio/20-pt2.jpeg", "capturas/Retrabalhos/unidade 1/banda_larga/2024/5- Maio/20-pt3.jpeg", "capturas/Retrabalhos/unidade 1/banda_larga/2024/5- Maio/20-g.jpeg"] },
            { data: "21/05/2024", captura: ["capturas/Retrabalhos/unidade 1/banda_larga/2024/5- Maio/21-pt1.png", "capturas/Retrabalhos/unidade 1/banda_larga/2024/5- Maio/20-pt2.jpeg", "capturas/Retrabalhos/unidade 1/banda_larga/2024/5- Maio/20-pt3.jpeg", "capturas/Retrabalhos/unidade 1/banda_larga/2024/5- Maio/20-g.jpeg"] },
            { data: "23/05/2024", captura: ["capturas/Retrabalhos/unidade 1/banda_larga/2024/5- Maio/23 1pt.jpg", "capturas/Retrabalhos/unidade 1/banda_larga/2024/5- Maio/23 2pt.jpg", "capturas/Retrabalhos/unidade 1/banda_larga/2024/5- Maio/23 3pt.jpg", "capturas/Retrabalhos/unidade 1/banda_larga/2024/5- Maio/23 4pt.jpg", "capturas/Retrabalhos/unidade 1/banda_larga/2024/5- Maio/23g.jpg"] },
            { data: "24/05/2024", captura: ["capturas/Retrabalhos/unidade 1/banda_larga/2024/5- Maio/24-pt1.png", "capturas/Retrabalhos/unidade 1/banda_larga/2024/5- Maio/23 2pt.jpg", "capturas/Retrabalhos/unidade 1/banda_larga/2024/5- Maio/23 4pt.jpg", "capturas/Retrabalhos/unidade 1/banda_larga/2024/5- Maio/23g.jpg"] },
            { data: "27/05/2024", captura: ["capturas/Retrabalhos/unidade 1/banda_larga/2024/5- Maio/27-pt1.png", "capturas/Retrabalhos/unidade 1/banda_larga/2024/5- Maio/27-pt2.jpeg", "capturas/Retrabalhos/unidade 1/banda_larga/2024/5- Maio/27-pt3.jpeg", "capturas/Retrabalhos/unidade 1/banda_larga/2024/5- Maio/27-g.jpeg"] },
            { data: "29/05/2024", captura: ["capturas/Retrabalhos/unidade 1/banda_larga/2024/5- Maio/29-pt1.png", "capturas/Retrabalhos/unidade 1/banda_larga/2024/5- Maio/27-pt2.jpeg", "capturas/Retrabalhos/unidade 1/banda_larga/2024/5- Maio/27-pt3.jpeg", "capturas/Retrabalhos/unidade 1/banda_larga/2024/5- Maio/27-g.jpeg"] },
            { data: "30/05/2024", captura: ["capturas/Retrabalhos/unidade 1/banda_larga/2024/5- Maio/30-pt1.png", "capturas/Retrabalhos/unidade 1/banda_larga/2024/5- Maio/27-pt2.jpeg", "capturas/Retrabalhos/unidade 1/banda_larga/2024/5- Maio/27-pt3.jpeg", "capturas/Retrabalhos/unidade 1/banda_larga/2024/5- Maio/27-g.jpeg"] },

            { data: "07/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 1/BandaLarga/7-pt1.png", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/BandaLarga/7-pt2.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/BandaLarga/7-pt3.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/BandaLarga/7-g.jpeg"] },
            { data: "11/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 1/BandaLarga/11-pt1.png", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/BandaLarga/11-pt2.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/BandaLarga/11-pt3.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/BandaLarga/11-g.jpeg"] },
            { data: "13/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 1/BandaLarga/13-pt1.png", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/BandaLarga/11-pt2.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/BandaLarga/11-pt3.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/BandaLarga/11-g.jpeg"] },
            { data: "14/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 1/BandaLarga/14-pt1.png", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/BandaLarga/11-pt2.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/BandaLarga/11-pt3.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/BandaLarga/11-g.jpeg"] },
            { data: "17/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 1/BandaLarga/17-pt1.png", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/BandaLarga/17-pt2.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/BandaLarga/17-pt3.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/BandaLarga/17-g.jpeg"] },
            { data: "18/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 1/BandaLarga/18-pt1.png", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/BandaLarga/17-pt2.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/BandaLarga/17-pt3.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/BandaLarga/17-g.jpeg"] },
            { data: "19/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 1/BandaLarga/19-pt1.png", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/BandaLarga/17-pt2.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/BandaLarga/17-pt3.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/BandaLarga/17-g.jpeg"] },
            { data: "21/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 1/BandaLarga/21-pt1.png", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/BandaLarga/17-pt2.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/BandaLarga/17-pt3.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/BandaLarga/17-g.jpeg"] },
            { data: "28/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 1/BandaLarga/28-pt1.png", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/BandaLarga/28-pt2.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/BandaLarga/28-pt3.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/BandaLarga/28-ptg.jpeg"] },
            
            { data: "05/07/2024", captura: ["capturas/Retrabalhos/2024/7- Julho/Unidade 1/BandaLarga/5-pt1.png", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/BandaLarga/5-pt2.jpeg", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/BandaLarga/5-pt3.jpeg", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/BandaLarga/5-pt4.jpeg"] },
            { data: "09/07/2024", captura: ["capturas/Retrabalhos/2024/7- Julho/Unidade 1/BandaLarga/9-pt1.png", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/BandaLarga/9-pt2.png", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/BandaLarga/9-pt3.png", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/BandaLarga/9-pt4.jpeg"] },
            { data: "12/07/2024", captura: ["capturas/Retrabalhos/2024/7- Julho/Unidade 1/BandaLarga/12-pt1.jpeg", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/BandaLarga/12-pt2.jpeg", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/BandaLarga/12-pt3.jpeg", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/BandaLarga/12-pt4.jpeg", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/BandaLarga/12-pt5.jpeg"] },
            { data: "19/07/2024", captura: ["capturas/Retrabalhos/2024/7- Julho/Unidade 1/BandaLarga/19 pt1.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/BandaLarga/19 pt2.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/BandaLarga/19 pt3.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/BandaLarga/19 pt4.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/BandaLarga/19 G.jpg"] },

            
            // { data: "", captura: ["", "", "", "", ""] },
            // { data: "", captura: ["", "", "", "", ""] },
         ],

        Cab_fundo: [
            { data: "25/11/2023", captura: ["capturas/Retrabalhos/unidade 1/cabine_fundo/11- Novembro/20-25.png"] },

            { data: "02/12/2023", captura: ["capturas/Retrabalhos/unidade 1/cabine_fundo/11- Novembro/27.png"] },

            { data: "09/12/2023", captura: ["capturas/Retrabalhos/unidade 1/cabine_fundo/12-Dezembro/04-12.png"] },

            { data: "16/12/2023", captura: ["capturas/Retrabalhos/unidade 1/cabine_fundo/12-Dezembro/SEMANA 11-12 À 15-12.png"] },

            { data: "20/12/2023", captura: ["capturas/Retrabalhos/unidade 1/cabine_fundo/12-Dezembro/SEMANA 18-12 À 20-12.png"] },

            { data: "12/01/2024", captura: ["capturas/Retrabalhos/unidade 1/cabine_fundo/2024/1- Janeiro/09-01 À 12-01.png"] },
            { data: "19/01/2024", captura: ["capturas/Retrabalhos/unidade 1/cabine_fundo/2024/1- Janeiro/15-01 À 19-01.png"] },
            { data: "26/01/2024", captura: ["capturas/Retrabalhos/unidade 1/cabine_fundo/2024/1- Janeiro/22-01 À 26-01.png"] },

            { data: "02/02/2024", captura: ["capturas/Retrabalhos/unidade 1/cabine_fundo/2024/2- Fevereiro/29-01 à 02-02.png"] },
            { data: "05/02/2024", captura: ["capturas/Retrabalhos/unidade 1/cabine_fundo/2024/2- Fevereiro/05-07.png"] },
            { data: "23/02/2024", captura: ["capturas/Retrabalhos/unidade 1/cabine_fundo/2024/2- Fevereiro/19-23.png"] },
            { data: "26/02/2024", captura: ["capturas/Retrabalhos/unidade 1/cabine_fundo/2024/3- Março/26-02.png"] },

            { data: "07/03/2024", captura: ["capturas/Retrabalhos/unidade 1/cabine_fundo/2024/3- Março/7.png"] },
            { data: "08/03/2024", captura: ["capturas/Retrabalhos/unidade 1/cabine_fundo/2024/3- Março/8.png"] },
            { data: "11/03/2024", captura: ["capturas/Retrabalhos/unidade 1/cabine_fundo/2024/3- Março/11.png"] },
            { data: "12/03/2024", captura: ["capturas/Retrabalhos/unidade 1/cabine_fundo/2024/3- Março/12.png"] },
            { data: "13/03/2024", captura: ["capturas/Retrabalhos/unidade 1/cabine_fundo/2024/3- Março/13.png"] },
            { data: "15/03/2024", captura: ["capturas/Retrabalhos/unidade 1/cabine_fundo/2024/3- Março/15.jpg"] },
            { data: "18/03/2024", captura: ["capturas/Retrabalhos/unidade 1/cabine_fundo/2024/3- Março/18-pt1.png", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/3- Março/18-pt2.png", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/3- Março/18-pt3.png", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/3- Março/18-pt4.png", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/3- Março/18-pt5.png", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/3- Março/18-pt6.png", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/3- Março/18-pt7.png", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/3- Março/18-pt8.png"] },
            { data: "19/03/2024", captura: ["capturas/Retrabalhos/unidade 1/cabine_fundo/2024/3- Março/19-pt1.png", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/3- Março/19-pt2.png", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/3- Março/19-pt3.png", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/3- Março/19-pt4.png", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/3- Março/19-pt5.png", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/3- Março/19-pt6.png"] },
            { data: "20/03/2024", captura: ["capturas/Retrabalhos/unidade 1/cabine_fundo/2024/3- Março/20-pt1.png", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/3- Março/20-pt2.png", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/3- Março/20-pt3.png", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/3- Março/20-pt4.png", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/3- Março/20-pt5.png", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/3- Março/20-pt6.png"] },
            { data: "21/03/2024", captura: ["capturas/Retrabalhos/unidade 1/cabine_fundo/2024/3- Março/21-pt1.png", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/3- Março/21-pt2.png", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/3- Março/21-pt3.png", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/3- Março/21-pt4.png", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/3- Março/21-pt5.png", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/3- Março/21-pt6.png", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/3- Março/21-G.jpeg"] },
            { data: "22/03/2024", captura: ["capturas/Retrabalhos/unidade 1/cabine_fundo/2024/3- Março/22-pt1.jpeg", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/3- Março/22-pt2.png", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/3- Março/22-pt3.png", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/3- Março/22-pt4.png", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/3- Março/22-pt5.png", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/3- Março/22-pt6.png", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/3- Março/22-G.jpeg"] },
            { data: "25/03/2024", captura: ["capturas/Retrabalhos/unidade 1/cabine_fundo/2024/3- Março/25-pt1.png", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/3- Março/25-pt2.jpeg", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/3- Março/25-pt3.png", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/3- Março/25-pt4.jpeg", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/3- Março/25-G.jpeg"] },
            { data: "26/03/2024", captura: ["capturas/Retrabalhos/unidade 1/cabine_fundo/2024/3- Março/26-pt1.jpeg", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/3- Março/26-pt2.jpeg", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/3- Março/26-pt3.png", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/3- Março/26-pt4.jpeg", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/3- Março/26-G.jpeg"] },
            { data: "27/03/2024", captura: ["capturas/Retrabalhos/unidade 1/cabine_fundo/2024/3- Março/27-pt1.jpeg", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/3- Março/27-pt2.jpeg", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/3- Março/27-pt3.png", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/3- Março/27-pt4.jpeg", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/3- Março/27-G.jpeg"] },
            { data: "28/03/2024", captura: ["capturas/Retrabalhos/unidade 1/cabine_fundo/2024/3- Março/28-pt1.jpeg", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/3- Março/28-pt2.jpeg", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/3- Março/28-pt3.jpeg", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/3- Março/28-pt4.jpeg", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/3- Março/28-G.jpeg"] },

            { data: "01/04/2024", captura: ["capturas/Retrabalhos/unidade 1/cabine_fundo/2024/4- Abril/1-pt1.png", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/4- Abril/1-pt2.jpeg", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/4- Abril/1-pt3.png", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/4- Abril/1-pt4.jpeg", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/4- Abril/1-G.jpeg"] },
            { data: "03/04/2024", captura: ["capturas/Retrabalhos/unidade 1/cabine_fundo/2024/4- Abril/3-pt1.png", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/4- Abril/3-pt2.jpeg", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/4- Abril/3-pt3.png", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/4- Abril/3-pt4.jpeg", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/4- Abril/3-G.jpeg"] },
            { data: "04/04/2024", captura: ["capturas/Retrabalhos/unidade 1/cabine_fundo/2024/4- Abril/4-pt1.png", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/4- Abril/4-pt2.jpeg", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/4- Abril/4-pt3.png", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/4- Abril/4-pt4.jpeg", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/4- Abril/4-G.jpeg"] },
            { data: "05/04/2024", captura: ["capturas/Retrabalhos/unidade 1/cabine_fundo/2024/4- Abril/5-pt1.jpeg", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/4- Abril/5-pt2.jpeg", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/4- Abril/5-pt3.png", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/4- Abril/5-pt4.jpeg", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/4- Abril/5-G.jpeg"] },
            { data: "08/04/2024", captura: ["capturas/Retrabalhos/unidade 1/cabine_fundo/2024/4- Abril/8-pt1.png", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/4- Abril/8-pt2.jpeg", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/4- Abril/8-pt3.png", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/4- Abril/8-pt4.jpeg", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/4- Abril/8-G.jpeg"] },
            { data: "10/04/2024", captura: ["capturas/Retrabalhos/unidade 1/cabine_fundo/2024/4- Abril/10-pt1.jpeg", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/4- Abril/10-pt2.jpeg", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/4- Abril/10-pt3.png", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/4- Abril/10-pt4.jpeg", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/4- Abril/10-G.jpeg"] },
            { data: "12/04/2024", captura: ["capturas/Retrabalhos/unidade 1/cabine_fundo/2024/4- Abril/12-pt1.jpeg", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/4- Abril/12-pt2.jpeg", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/4- Abril/12-pt3.png", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/4- Abril/12-pt4.jpeg", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/4- Abril/12-G.jpeg"] },
            { data: "16/04/2024", captura: ["capturas/Retrabalhos/unidade 1/cabine_fundo/2024/4- Abril/16-pt1.png", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/4- Abril/16-pt2.jpeg", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/4- Abril/16-pt3.png", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/4- Abril/16-pt4.jpeg", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/4- Abril/16-G.jpeg"] },
            { data: "19/04/2024", captura: ["capturas/Retrabalhos/unidade 1/cabine_fundo/2024/4- Abril/19-pt1.jpeg", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/4- Abril/19-pt2.jpeg", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/4- Abril/19-pt3.png", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/4- Abril/19-pt4.jpeg", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/4- Abril/19-G.jpeg"] },
            { data: "26/04/2024", captura: ["capturas/Retrabalhos/unidade 1/cabine_fundo/2024/4- Abril/26-pt1.jpeg", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/4- Abril/26-pt2.jpeg", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/4- Abril/26-pt3.png", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/4- Abril/26-pt4.jpeg", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/4- Abril/26-G.jpeg"] },

            { data: "03/05/2024", captura: ["capturas/Retrabalhos/unidade 1/cabine_fundo/2024/5- Maio/3-pt1.png", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/5- Maio/3-pt2.jpeg", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/5- Maio/3-pt3.png", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/5- Maio/3-pt4.jpeg", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/5- Maio/3-g.jpeg"] },
            { data: "06/05/2024", captura: ["capturas/Retrabalhos/unidade 1/cabine_fundo/2024/5- Maio/6-pt1.png", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/5- Maio/6-pt2.jpeg", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/5- Maio/6-pt3.png", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/5- Maio/6-pt4.jpeg", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/5- Maio/6-g.jpeg"] },
            { data: "07/05/2024", captura: ["capturas/Retrabalhos/unidade 1/cabine_fundo/2024/5- Maio/7-pt1.png", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/5- Maio/7-pt2.jpeg", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/5- Maio/7-pt3.png", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/5- Maio/7-pt4.jpeg", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/5- Maio/7-g.jpeg"] },
            { data: "09/05/2024", captura: ["capturas/Retrabalhos/unidade 1/cabine_fundo/2024/5- Maio/9-pt1.png", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/5- Maio/9-pt2.jpeg", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/5- Maio/9-pt3.png", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/5- Maio/9-pt4.jpeg", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/5- Maio/9-g.jpeg"] },
            { data: "10/05/2024", captura: ["capturas/Retrabalhos/unidade 1/cabine_fundo/2024/5- Maio/10-pt1.png", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/5- Maio/10-pt2.jpeg", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/5- Maio/10-pt3.png", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/5- Maio/10-pt4.jpeg", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/5- Maio/10-g.jpeg"] },
            { data: "13/05/2024", captura: ["capturas/Retrabalhos/unidade 1/cabine_fundo/2024/5- Maio/13-pt1.png", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/5- Maio/13-pt2.jpeg", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/5- Maio/13-pt3.jpeg", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/5- Maio/13-g.jpeg"] },
            { data: "14/05/2024", captura: ["capturas/Retrabalhos/unidade 1/cabine_fundo/2024/5- Maio/14-pt1.png", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/5- Maio/14-pt2.jpeg", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/5- Maio/14-pt3.jpeg", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/5- Maio/14-g.jpeg"] },
            { data: "16/05/2024", captura: ["capturas/Retrabalhos/unidade 1/cabine_fundo/2024/5- Maio/16-pt1.png", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/5- Maio/16-pt2.jpeg", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/5- Maio/16-pt3.png", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/5- Maio/16-pt4.jpeg", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/5- Maio/16-g.jpeg"] },
            { data: "17/05/2024", captura: ["capturas/Retrabalhos/unidade 1/cabine_fundo/2024/5- Maio/17-pt1.png", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/5- Maio/17-pt2.jpeg", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/5- Maio/17-pt3.png", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/5- Maio/17-pt4.jpeg", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/5- Maio/17-g.jpeg"] },
            { data: "20/05/2024", captura: ["capturas/Retrabalhos/unidade 1/cabine_fundo/2024/5- Maio/20-pt1.png", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/5- Maio/20-pt2.jpeg", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/5- Maio/20-pt3.jpeg", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/5- Maio/20-g.jpeg"] },
            { data: "21/05/2024", captura: ["capturas/Retrabalhos/unidade 1/cabine_fundo/2024/5- Maio/21-pt1.png", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/5- Maio/21-pt2.jpeg", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/5- Maio/21-pt3.jpeg", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/5- Maio/21-g.jpeg"] },
            { data: "23/05/2024", captura: ["capturas/Retrabalhos/unidade 1/cabine_fundo/2024/5- Maio/23 1pt.jpg", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/5- Maio/23 2pt.jpg", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/5- Maio/23 3pt.jpg", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/5- Maio/23 4pt.jpg", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/5- Maio/23g.jpg"] },
            { data: "24/05/2024", captura: ["capturas/Retrabalhos/unidade 1/cabine_fundo/2024/5- Maio/24-pt1.png", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/5- Maio/24-pt2.jpeg", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/5- Maio/24-pt3.png", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/5- Maio/24-pt4.jpeg", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/5- Maio/24-g.jpeg"] },
            { data: "27/05/2024", captura: ["capturas/Retrabalhos/unidade 1/cabine_fundo/2024/5- Maio/27-pt1.png", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/5- Maio/27-pt2.jpeg", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/5- Maio/27-pt3.jpeg", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/5- Maio/27-g.jpeg"] },
            { data: "29/05/2024", captura: ["capturas/Retrabalhos/unidade 1/cabine_fundo/2024/5- Maio/29-pt1.jpeg", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/5- Maio/29-pt2.jpeg", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/5- Maio/29-pt3.jpeg", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/5- Maio/29-g.jpeg"] },
            { data: "30/05/2024", captura: ["capturas/Retrabalhos/unidade 1/cabine_fundo/2024/5- Maio/30-pt1.jpeg", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/5- Maio/30-pt2.jpeg", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/5- Maio/30-pt3.png", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/5- Maio/30-pt4.jpeg", "capturas/Retrabalhos/unidade 1/cabine_fundo/2024/5- Maio/30-g.jpeg"] },

            { data: "07/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 1/Cab.Fundo/7-pt1.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Cab.Fundo/7-pt2.png", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Cab.Fundo/7-pt3.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Cab.Fundo/7-pt4.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Cab.Fundo/7-g.jpeg"] },
            { data: "11/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 1/Cab.Fundo/11-pt1.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Cab.Fundo/11-pt2.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Cab.Fundo/11-pt3.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Cab.Fundo/11-g.jpeg"] },
            { data: "13/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 1/Cab.Fundo/13-pt1.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Cab.Fundo/13-pt2.png", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Cab.Fundo/13-pt3.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Cab.Fundo/13-pt4.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Cab.Fundo/13-g.jpeg"] },
            { data: "14/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 1/Cab.Fundo/14-pt1.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Cab.Fundo/14-pt2.png", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Cab.Fundo/14-pt3.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Cab.Fundo/14-g.jpeg"] },
            { data: "17/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 1/Cab.Fundo/17-pt1.png", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Cab.Fundo/17-pt2.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Cab.Fundo/17-pt3.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Cab.Fundo/17-g.jpeg"] },
            { data: "18/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 1/Cab.Fundo/18-pt1.png", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Cab.Fundo/18-pt2.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Cab.Fundo/18-pt3.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Cab.Fundo/18-g.jpeg"] },
            { data: "19/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 1/Cab.Fundo/19-pt1.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Cab.Fundo/19-pt2.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Cab.Fundo/19-pt3.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Cab.Fundo/19-g.jpeg"] },
            { data: "21/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 1/Cab.Fundo/21-pt1.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Cab.Fundo/21-pt2.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Cab.Fundo/21-pt3.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Cab.Fundo/21-g.jpeg"] },
            { data: "28/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 1/Cab.Fundo/28-pt1.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Cab.Fundo/28-pt2.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Cab.Fundo/28-pt3.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Cab.Fundo/28-ptg.jpeg"] },

            { data: "05/07/2024", captura: ["capturas/Retrabalhos/2024/7- Julho/Unidade 1/Cab.Fundo/5-pt1.png", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/Cab.Fundo/5-pt2.png", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/Cab.Fundo/5-pt3.jpeg", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/Cab.Fundo/5-pt4.jpeg", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/Cab.Fundo/5-pt5.jpeg"] },
            { data: "09/07/2024", captura: ["capturas/Retrabalhos/2024/7- Julho/Unidade 1/Cab.Fundo/9-pt1.jpeg", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/Cab.Fundo/9-pt2.jpeg", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/Cab.Fundo/9-pt3.jpeg", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/Cab.Fundo/9-pt4.jpeg"] },
            { data: "12/07/2024", captura: ["capturas/Retrabalhos/2024/7- Julho/Unidade 1/Cab.Fundo/12-pt1.jpeg", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/Cab.Fundo/12-pt2.jpeg", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/Cab.Fundo/12-pt3.jpeg", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/Cab.Fundo/12-pt4.jpeg", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/Cab.Fundo/12-pt5.jpeg"] },
            { data: "19/07/2024", captura: ["capturas/Retrabalhos/2024/7- Julho/Unidade 1/Cab.Fundo/19 1PT.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/Cab.Fundo/19 2PT.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/Cab.Fundo/19 3PT.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/Cab.Fundo/19 4PT.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/Cab.Fundo/19 G.jpg"] },


            // { data: "", captura: ["", "", "", "", "", "", "", ""] },
            // { data: "", captura: ["", "", "", "", "", "", "", ""] },
        ],

        exp1: [
            { data: "25/11/2023", captura: ["capturas/Retrabalhos/unidade 1/Expedição/11- Novembro/20-25.png"] },
            { data: "02/12/2023", captura: ["capturas/Retrabalhos/unidade 1/Expedição/11- Novembro/27.png", "capturas/Retrabalhos/unidade 1/Expedição/11- Novembro/27 GRAFICO.png"] },

            { data: "07/12/2023", captura: ["capturas/Retrabalhos/unidade 1/Expedição/12-Dezembro/04-12.png", "capturas/Retrabalhos/unidade 1/Expedição/12-Dezembro/07-12.png"] },
            { data: "09/12/2023", captura: ["capturas/Retrabalhos/unidade 1/Expedição/12-Dezembro/SEMANA 04-12 À 09-12.png"] },
            
            { data: "16/12/2023", captura: [ "capturas/Retrabalhos/unidade 1/Expedição/12-Dezembro/SEMANA 11-12 À 15-12.png", "capturas/Retrabalhos/unidade 1/Expedição/12-Dezembro/SEMANA 11-12 À 15-12 GRAFI.png"] },

            { data: "20/12/2023", captura: ["capturas/Retrabalhos/unidade 1/Expedição/12-Dezembro/18-12 À 20-12.png", "capturas/Retrabalhos/unidade 1/Expedição/12-Dezembro/18-12 À 20-12 GRAFICO.png"] },

            { data: "12/01/2024", captura: ["capturas/Retrabalhos/unidade 1/Expedição/2024/1- Janeiro/09-01 À 12-01.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/1- Janeiro/09-01 À 12-01 GRÁFICO.png"] },
            { data: "19/01/2024", captura: ["capturas/Retrabalhos/unidade 1/Expedição/2024/1- Janeiro/15-01 À 19-01.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/1- Janeiro/15-01 À 19-01 GRÁFICO.png"] },
            { data: "26/01/2024", captura: ["capturas/Retrabalhos/unidade 1/Expedição/2024/1- Janeiro/22-01 À 26-01.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/1- Janeiro/22-01 À 26-01 GRÁFICO.png"] },

            { data: "02/02/2024", captura: ["capturas/Retrabalhos/unidade 1/Expedição/2024/2- Fevereiro/tampos unid 01 29.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/2- Fevereiro/complemento 01 29.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/2- Fevereiro/tampos 01 pçs 29.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/2- Fevereiro/complemento 01 pçs 29.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/2- Fevereiro/grafico unid 01.png"] },
            { data: "05/02/2024", captura: ["capturas/Retrabalhos/unidade 1/Expedição/2024/2- Fevereiro/complemento 05-07 pçs.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/2- Fevereiro/complemento 05-07.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/2- Fevereiro/tampos 01 pçs 29.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/2- Fevereiro/tampos 05-07.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/2- Fevereiro/grafico unid 01 05-07.png"] },
            { data: "23/02/2024", captura: ["capturas/Retrabalhos/unidade 1/Expedição/2024/2- Fevereiro/tampos pçs 19-23.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/2- Fevereiro/grafico tampo 19-23.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/2- Fevereiro/complemento peças 19-23.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/2- Fevereiro/complemento grafico 19-23.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/2- Fevereiro/gafico assit 19-23.png"] },
            { data: "26/02/2024", captura: ["capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/26-02 complemento.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/26-02 comple grafico.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/26-02 tampos.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/26-02 tampo grafico.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/26-02 grafico infinito.png"] },

            { data: "07/03/2024", captura: ["capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/07 COMPL.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/07 COMP.GRAFICO.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/07 TAMPOS .png", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/07 TAMPOS GRAFICO.png"] },
            { data: "08/03/2024", captura: ["capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/08 COMPL.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/08 COMP.GRAFICO.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/08 TAMPOS .png", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/08 TAMPOS GRAFICO.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/08 grafico infinito.png"] },
            { data: "11/03/2024", captura: ["capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/11 COMPL.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/11 COMP.GRAFICO.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/11 TAMPOS .png", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/11 TAMPOS GRAFICO.png", ""] },
            { data: "12/03/2024", captura: ["capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/12 COMPL.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/12 COMP.GRAFICO.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/12 TAMPOS .png", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/12 TAMPOS GRAFICO.png"] },
            { data: "13/03/2024", captura: ["capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/13 COMPL.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/13 COMP.GRAFICO.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/13 TAMPOS.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/13 TAMPOS GRAFICO.png"] },
            { data: "15/03/2024", captura: ["capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/15 COMPL.jpg", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/15 COMPL GRAFICO.jpg", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/15 TAMPOS PÇS.jpg", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/15 TAMPOS GRAFICOS.jpg", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/15 GRAFICO INFINITO.jpg"] },
            { data: "18/03/2024", captura: ["capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/18-pt1.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/18-pt2.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/18-pt3.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/18-pt4.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/18-pt5.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/18-pt6.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/18-G.png"] },
            { data: "19/03/2024", captura: ["capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/19-pt1.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/19-pt2.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/19-pt3.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/19-pt4.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/19-pt5.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/19-pt6.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/19-G.png"] },
            { data: "20/03/2024", captura: ["capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/20-pt1.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/20-pt2.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/20-pt3.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/20-pt4.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/20-pt5.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/20-pt6.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/20-G.png"] },
            { data: "21/03/2024", captura: ["capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/21-pt1.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/21-pt2.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/21-pt3.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/21-pt4.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/21-pt5.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/21-pt6.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/21-G.png"] },
            { data: "22/03/2024", captura: ["capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/22-pt1.jpeg", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/22-pt2.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/22-pt3.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/22-pt4.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/22-pt5.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/22-pt6.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/22-G.png"] },
            { data: "25/03/2024", captura: ["capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/25-pt1.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/25-pt2.jpeg", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/25-pt3.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/25-pt4.jpeg", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/25-G.jpeg"] },
            { data: "26/03/2024", captura: ["capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/26-pt1.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/26-pt2.jpeg", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/26-pt3.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/26-pt4.jpeg", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/26-G.jpeg"] },
            { data: "27/03/2024", captura: ["capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/27-pt1.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/27-pt2.jpeg", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/27-pt3.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/27-pt4.jpeg", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/27-G.jpeg"] },
            { data: "28/03/2024", captura: ["capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/28-pt1.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/28-pt2.jpeg", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/28-pt3.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/28-pt4.jpeg", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/28-G.jpeg"] },

            { data: "01/04/2024", captura: ["capturas/Retrabalhos/unidade 1/Expedição/2024/4- Abril/1-pt1.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/4- Abril/1-pt2.jpeg", "capturas/Retrabalhos/unidade 1/Expedição/2024/4- Abril/1-pt3.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/4- Abril/1-pt4.jpeg", "capturas/Retrabalhos/unidade 1/Expedição/2024/4- Abril/1-G.jpeg"] },
            { data: "03/04/2024", captura: ["capturas/Retrabalhos/unidade 1/Expedição/2024/4- Abril/3-pt1.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/4- Abril/3-pt2.jpeg", "capturas/Retrabalhos/unidade 1/Expedição/2024/4- Abril/3-pt3.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/4- Abril/3-pt4.jpeg", "capturas/Retrabalhos/unidade 1/Expedição/2024/4- Abril/3-G.jpeg"] },
            { data: "04/04/2024", captura: ["capturas/Retrabalhos/unidade 1/Expedição/2024/4- Abril/4-pt1.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/4- Abril/4-pt2.jpeg", "capturas/Retrabalhos/unidade 1/Expedição/2024/4- Abril/4-pt3.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/4- Abril/4-pt4.jpeg", "capturas/Retrabalhos/unidade 1/Expedição/2024/4- Abril/4-G.jpeg"] },
            { data: "05/04/2024", captura: ["capturas/Retrabalhos/unidade 1/Expedição/2024/4- Abril/5-pt1.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/4- Abril/5-pt2.jpeg", "capturas/Retrabalhos/unidade 1/Expedição/2024/4- Abril/5-pt3.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/4- Abril/5-pt4.jpeg", "capturas/Retrabalhos/unidade 1/Expedição/2024/4- Abril/5-G.jpeg"] },
            { data: "08/04/2024", captura: ["capturas/Retrabalhos/unidade 1/Expedição/2024/4- Abril/8-pt1.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/4- Abril/8-pt2.jpeg", "capturas/Retrabalhos/unidade 1/Expedição/2024/4- Abril/8-pt3.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/4- Abril/8-pt4.jpeg", "capturas/Retrabalhos/unidade 1/Expedição/2024/4- Abril/8-G.jpeg"] },
            { data: "10/04/2024", captura: ["capturas/Retrabalhos/unidade 1/Expedição/2024/4- Abril/10-pt1.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/4- Abril/10-pt2.jpeg", "capturas/Retrabalhos/unidade 1/Expedição/2024/4- Abril/10-pt3.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/4- Abril/10-pt4.jpeg", "capturas/Retrabalhos/unidade 1/Expedição/2024/4- Abril/10-G.jpeg"] },
            { data: "12/04/2024", captura: ["capturas/Retrabalhos/unidade 1/Expedição/2024/4- Abril/12-pt1.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/4- Abril/12-pt2.jpeg", "capturas/Retrabalhos/unidade 1/Expedição/2024/4- Abril/12-pt3.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/4- Abril/12-pt4.jpeg", "capturas/Retrabalhos/unidade 1/Expedição/2024/4- Abril/12-G.jpeg"] },
            { data: "16/04/2024", captura: ["capturas/Retrabalhos/unidade 1/Expedição/2024/4- Abril/16-pt1.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/4- Abril/16-pt2.jpeg", "capturas/Retrabalhos/unidade 1/Expedição/2024/4- Abril/16-pt3.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/4- Abril/16-pt4.jpeg", "capturas/Retrabalhos/unidade 1/Expedição/2024/4- Abril/16-G.jpeg"] },
            { data: "19/04/2024", captura: ["capturas/Retrabalhos/unidade 1/Expedição/2024/4- Abril/19-pt1.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/4- Abril/19-pt2.jpeg", "capturas/Retrabalhos/unidade 1/Expedição/2024/4- Abril/19-pt3.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/4- Abril/19-pt4.jpeg", "capturas/Retrabalhos/unidade 1/Expedição/2024/4- Abril/19-G.jpeg"] },
            { data: "26/04/2024", captura: ["capturas/Retrabalhos/unidade 1/Expedição/2024/4- Abril/26-pt1.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/4- Abril/26-pt2.jpeg", "capturas/Retrabalhos/unidade 1/Expedição/2024/4- Abril/26-pt3.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/4- Abril/26-pt4.jpeg", "capturas/Retrabalhos/unidade 1/Expedição/2024/4- Abril/26-G.jpeg"] },

            { data: "03/05/2024", captura: ["capturas/Retrabalhos/unidade 1/Expedição/2024/5- Maio/3-pt1.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/5- Maio/3-pt2.jpeg", "capturas/Retrabalhos/unidade 1/Expedição/2024/5- Maio/3-pt3.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/5- Maio/3-pt4.jpeg", "capturas/Retrabalhos/unidade 1/Expedição/2024/5- Maio/3-g.jpeg"] },
            { data: "06/05/2024", captura: ["capturas/Retrabalhos/unidade 1/Expedição/2024/5- Maio/6-pt1.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/5- Maio/6-pt2.jpeg", "capturas/Retrabalhos/unidade 1/Expedição/2024/5- Maio/6-pt3.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/5- Maio/6-pt4.jpeg", "capturas/Retrabalhos/unidade 1/Expedição/2024/5- Maio/6-g.jpeg"] },
            { data: "07/05/2024", captura: ["capturas/Retrabalhos/unidade 1/Expedição/2024/5- Maio/7-pt1.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/5- Maio/7-pt2.jpeg", "capturas/Retrabalhos/unidade 1/Expedição/2024/5- Maio/7-pt3.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/5- Maio/7-pt4.jpeg", "capturas/Retrabalhos/unidade 1/Expedição/2024/5- Maio/7-g.jpeg"] },
            { data: "09/05/2024", captura: ["capturas/Retrabalhos/unidade 1/Expedição/2024/5- Maio/9-g.jpeg", "capturas/Retrabalhos/unidade 1/Expedição/2024/5- Maio/9-pt1.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/5- Maio/9-pt2.jpeg", "capturas/Retrabalhos/unidade 1/Expedição/2024/5- Maio/9-pt3.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/5- Maio/9-pt4.jpeg", "capturas/Retrabalhos/unidade 1/Expedição/2024/5- Maio/9-g.jpeg"] },
            { data: "10/05/2024", captura: ["capturas/Retrabalhos/unidade 1/Expedição/2024/5- Maio/10-pt1.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/5- Maio/10-pt2.jpeg", "capturas/Retrabalhos/unidade 1/Expedição/2024/5- Maio/10-pt3.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/5- Maio/10-pt4.jpeg", "capturas/Retrabalhos/unidade 1/Expedição/2024/5- Maio/10-g.jpeg"] },
            { data: "13/05/2024", captura: ["capturas/Retrabalhos/unidade 1/Expedição/2024/5- Maio/13-pt1.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/5- Maio/13-pt2.jpeg", "capturas/Retrabalhos/unidade 1/Expedição/2024/5- Maio/13-pt3.jpeg", "capturas/Retrabalhos/unidade 1/Expedição/2024/5- Maio/13-g.jpeg"] },
            { data: "14/05/2024", captura: ["capturas/Retrabalhos/unidade 1/Expedição/2024/5- Maio/14-pt1.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/5- Maio/14-pt2.jpeg", "capturas/Retrabalhos/unidade 1/Expedição/2024/5- Maio/14-pt3.jpeg", "capturas/Retrabalhos/unidade 1/Expedição/2024/5- Maio/14-g.jpeg"] },
            { data: "16/05/2024", captura: ["capturas/Retrabalhos/unidade 1/Expedição/2024/5- Maio/16-pt1.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/5- Maio/16-pt2.jpeg", "capturas/Retrabalhos/unidade 1/Expedição/2024/5- Maio/16-pt3.jpeg", "capturas/Retrabalhos/unidade 1/Expedição/2024/5- Maio/16-g.jpeg"] },
            { data: "17/05/2024", captura: ["capturas/Retrabalhos/unidade 1/Expedição/2024/5- Maio/17-pt1.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/5- Maio/17-pt2.jpeg", "capturas/Retrabalhos/unidade 1/Expedição/2024/5- Maio/17-pt4.jpeg", "capturas/Retrabalhos/unidade 1/Expedição/2024/5- Maio/17-g.jpeg"] },
            { data: "20/05/2024", captura: ["capturas/Retrabalhos/unidade 1/Expedição/2024/5- Maio/20-pt1.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/5- Maio/20-pt2.jpeg", "capturas/Retrabalhos/unidade 1/Expedição/2024/5- Maio/20-pt3.jpeg", "capturas/Retrabalhos/unidade 1/Expedição/2024/5- Maio/20-g.jpeg"] },
            { data: "21/05/2024", captura: ["capturas/Retrabalhos/unidade 1/Expedição/2024/5- Maio/21-pt1.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/5- Maio/21-pt2.jpeg", "capturas/Retrabalhos/unidade 1/Expedição/2024/5- Maio/21-pt3.jpeg", "capturas/Retrabalhos/unidade 1/Expedição/2024/5- Maio/21-g.jpeg"] },
            { data: "23/05/2024", captura: ["capturas/Retrabalhos/unidade 1/Expedição/2024/5- Maio/23 1pt.jpg", "capturas/Retrabalhos/unidade 1/Expedição/2024/5- Maio/23 2pt.jpg", "capturas/Retrabalhos/unidade 1/Expedição/2024/5- Maio/23 3pt.jpg", "capturas/Retrabalhos/unidade 1/Expedição/2024/5- Maio/23 4pt.jpg", "capturas/Retrabalhos/unidade 1/Expedição/2024/5- Maio/23 g.jpg"] },
            { data: "24/05/2024", captura: ["capturas/Retrabalhos/unidade 1/Expedição/2024/5- Maio/24-pt1.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/5- Maio/24-pt2.jpeg", "capturas/Retrabalhos/unidade 1/Expedição/2024/5- Maio/24-pt3.jpeg", "capturas/Retrabalhos/unidade 1/Expedição/2024/5- Maio/24-g.jpeg"] },
            { data: "27/05/2024", captura: ["capturas/Retrabalhos/unidade 1/Expedição/2024/5- Maio/27-pt1.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/5- Maio/27-pt2.jpeg", "capturas/Retrabalhos/unidade 1/Expedição/2024/5- Maio/27-pt3.jpeg", "capturas/Retrabalhos/unidade 1/Expedição/2024/5- Maio/27-g.jpeg"] },
            { data: "29/05/2024", captura: ["capturas/Retrabalhos/unidade 1/Expedição/2024/5- Maio/29-pt1.jpeg", "capturas/Retrabalhos/unidade 1/Expedição/2024/5- Maio/29-pt2.jpeg", "capturas/Retrabalhos/unidade 1/Expedição/2024/5- Maio/29-pt3.jpeg", "capturas/Retrabalhos/unidade 1/Expedição/2024/5- Maio/29-g.jpeg"] },
            { data: "30/05/2024", captura: ["capturas/Retrabalhos/unidade 1/Expedição/2024/5- Maio/30-pt1.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/5- Maio/30-pt2.jpeg", "capturas/Retrabalhos/unidade 1/Expedição/2024/5- Maio/30-pt3.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/5- Maio/30-pt4.jpeg", "capturas/Retrabalhos/unidade 1/Expedição/2024/5- Maio/30-g.jpeg"] },

            { data: "07/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 1/Expedição/7-pt1.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Expedição/7-pt2.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Expedição/7-pt3.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Expedição/7-g.jpeg"] },
            { data: "11/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 1/Expedição/11-pt1.png", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Expedição/11-pt2.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Expedição/11-pt3.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Expedição/11-g.jpeg"] },
            { data: "13/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 1/Expedição/13-pt1.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Expedição/13-pt2.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Expedição/13-pt3.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Expedição/13-g.jpeg"] },
            { data: "14/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 1/Expedição/14-pt1.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Expedição/14-pt2.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Expedição/14-pt3.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Expedição/14-g.jpeg"] },
            { data: "17/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 1/Expedição/17-pt1.png", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Expedição/17-pt2.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Expedição/17-pt3.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Expedição/17-g.jpeg"] },
            { data: "18/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 1/Expedição/18-pt1.png", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Expedição/18-pt2.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Expedição/18-pt3.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Expedição/18-g.jpeg"] },
            { data: "19/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 1/Expedição/19-pt1.png", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Expedição/19-pt2.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Expedição/19-pt3.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Expedição/19-g.jpeg"] },
            { data: "21/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 1/Expedição/21-pt1.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Expedição/21-pt2.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Expedição/21-pt3.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Expedição/21-g.jpeg"] },
            { data: "28/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 1/Expedição/28-pt1.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Expedição/28-pt2.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Expedição/28-pt3.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Expedição/28-ptg.jpeg"] },

            { data: "05/07/2024", captura: ["capturas/Retrabalhos/2024/7- Julho/Unidade 1/Expedição/5-pt1.jpeg", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/Expedição/5-pt2.jpeg", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/Expedição/5-pt3.jpeg", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/Expedição/5-pt4.jpeg"] },
            { data: "09/07/2024", captura: ["capturas/Retrabalhos/2024/7- Julho/Unidade 1/Expedição/9-pt1.png", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/Expedição/9-pt2.jpeg", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/Expedição/9-pt3.jpeg", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/Expedição/9-pt4.jpeg"] },
            { data: "12/07/2024", captura: ["capturas/Retrabalhos/2024/7- Julho/Unidade 1/Expedição/12-pt1.jpeg", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/Expedição/12-pt2.jpeg", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/Expedição/12-pt3.jpeg", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/Expedição/12-pt4.jpeg"] },
            { data: "19/07/2024", captura: ["capturas/Retrabalhos/2024/7- Julho/Unidade 1/Expedição/19 1pt.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/Expedição/19 2pt.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/Expedição/19 3pt.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/Expedição/19 4pt.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/Expedição/19 G.jpg"] },


            // { data: "", captura: ["", "", "", "", "", "", ""] },
            // { data: "", captura: ["", "", "", "", "", "", ""] },
        ],

        Lix_Osso: [
            { data: "25/11/2023", captura: ["capturas/Retrabalhos/unidade 1/osso/11- Novembro/20-25.png"] },

            { data: "02/12/2023", captura: ["capturas/Retrabalhos/unidade 1/osso/11- Novembro/27.png"] },

            { data: "09/12/2023", captura: ["capturas/Retrabalhos/unidade 1/osso/12- Dezembro/SEMANA 04 À 09.png"] },

            { data: "16/12/2023", captura: ["capturas/Retrabalhos/unidade 1/osso/12- Dezembro/SEMANA 11 À 15.png"] },
        
            { data: "20/12/2023", captura: ["capturas/Retrabalhos/unidade 1/osso/12- Dezembro/SEMANA 18 À 20.png"] },

            { data: "12/01/2024", captura: ["capturas/Retrabalhos/unidade 1/osso/2024/1- Janeiro/09-01 À 12-01.png"] },
            { data: "19/01/2024", captura: ["capturas/Retrabalhos/unidade 1/osso/2024/1- Janeiro/15-01 Á 19-01.png"] },
            { data: "26/01/2024", captura: ["capturas/Retrabalhos/unidade 1/osso/2024/1- Janeiro/22-01 Á 26-01.png"] },

            { data: "02/02/2024", captura: ["capturas/Retrabalhos/unidade 1/osso/2024/2- Fevereiro/29-01 à 02-02.png"] },
            { data: "05/02/2024", captura: ["capturas/Retrabalhos/unidade 1/osso/2024/2- Fevereiro/05-07.png"] },
            { data: "23/02/2024", captura: ["capturas/Retrabalhos/unidade 1/osso/2024/2- Fevereiro/19-23.png"] },
            { data: "26/02/2024", captura: ["capturas/Retrabalhos/unidade 1/osso/2024/3- Março/26-02.png"] },

            { data: "07/03/2024", captura: ["capturas/Retrabalhos/unidade 1/osso/2024/3- Março/7.png"] },
            { data: "08/03/2024", captura: ["capturas/Retrabalhos/unidade 1/osso/2024/3- Março/8.png"] },
            { data: "11/03/2024", captura: ["capturas/Retrabalhos/unidade 1/osso/2024/3- Março/11.png"] },
            { data: "12/03/2024", captura: ["capturas/Retrabalhos/unidade 1/osso/2024/3- Março/12.png"] },
            { data: "13/03/2024", captura: ["capturas/Retrabalhos/unidade 1/osso/2024/3- Março/13.png"] },
            { data: "15/03/2024", captura: ["capturas/Retrabalhos/unidade 1/osso/2024/3- Março/15.jpg"] },
            { data: "18/03/2024", captura: ["capturas/Retrabalhos/unidade 1/osso/2024/3- Março/18-pt1.png", "capturas/Retrabalhos/unidade 1/osso/2024/3- Março/18-pt2.png", "capturas/Retrabalhos/unidade 1/osso/2024/3- Março/18-pt3.png", "capturas/Retrabalhos/unidade 1/osso/2024/3- Março/18-pt4.png", "capturas/Retrabalhos/unidade 1/osso/2024/3- Março/18-pt5.png", "capturas/Retrabalhos/unidade 1/osso/2024/3- Março/18-pt6.png", "capturas/Retrabalhos/unidade 1/osso/2024/3- Março/18-pt7.png", "capturas/Retrabalhos/unidade 1/osso/2024/3- Março/18-pt8.png"] },
            { data: "21/03/2024", captura: ["capturas/Retrabalhos/unidade 1/osso/2024/3- Março/21-pt1.png", "capturas/Retrabalhos/unidade 1/osso/2024/3- Março/21-pt2.png", "capturas/Retrabalhos/unidade 1/osso/2024/3- Março/21-pt3.png", "capturas/Retrabalhos/unidade 1/osso/2024/3- Março/21-pt4.png", "capturas/Retrabalhos/unidade 1/osso/2024/3- Março/21-pt5.png", "capturas/Retrabalhos/unidade 1/osso/2024/3- Março/21-pt6.png", "capturas/Retrabalhos/unidade 1/osso/2024/3- Março/21-G.png"] },
            { data: "22/03/2024", captura: ["capturas/Retrabalhos/unidade 1/osso/2024/3- Março/22-pt1.jpeg", "capturas/Retrabalhos/unidade 1/osso/2024/3- Março/22-pt2.jpeg", "capturas/Retrabalhos/unidade 1/osso/2024/3- Março/22-pt3.png", "capturas/Retrabalhos/unidade 1/osso/2024/3- Março/22-pt4.jpeg", "capturas/Retrabalhos/unidade 1/osso/2024/3- Março/22-G.jpeg"] },
            { data: "25/03/2024", captura: ["capturas/Retrabalhos/unidade 1/osso/2024/3- Março/25-pt1.png", "capturas/Retrabalhos/unidade 1/osso/2024/3- Março/25-pt2.jpeg", "capturas/Retrabalhos/unidade 1/osso/2024/3- Março/25-pt3.png", "capturas/Retrabalhos/unidade 1/osso/2024/3- Março/25-pt4.jpeg", "capturas/Retrabalhos/unidade 1/osso/2024/3- Março/25-G.jpeg"] },
            { data: "26/03/2024", captura: ["capturas/Retrabalhos/unidade 1/osso/2024/3- Março/26-pt1.png", "capturas/Retrabalhos/unidade 1/osso/2024/3- Março/26-pt2.jpeg", "capturas/Retrabalhos/unidade 1/osso/2024/3- Março/26-pt3.png", "capturas/Retrabalhos/unidade 1/osso/2024/3- Março/26-pt4.jpeg", "capturas/Retrabalhos/unidade 1/osso/2024/3- Março/26-G.jpeg"] },
            { data: "27/03/2024", captura: ["capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/27-pt1.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/27-pt2.jpeg", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/27-pt3.png", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/27-pt4.jpeg", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/27-G.jpeg"] },
            { data: "28/03/2024", captura: ["capturas/Retrabalhos/unidade 1/osso/2024/3- Março/28-pt1.png", "capturas/Retrabalhos/unidade 1/osso/2024/3- Março/28-pt2.jpeg", "capturas/Retrabalhos/unidade 1/osso/2024/3- Março/28-pt3.png", "capturas/Retrabalhos/unidade 1/osso/2024/3- Março/28-pt4.jpeg", "capturas/Retrabalhos/unidade 1/osso/2024/3- Março/28-G.jpeg"] },

            { data: "01/04/2024", captura: ["capturas/Retrabalhos/unidade 1/osso/2024/4- Abril/1-pt1.png", "capturas/Retrabalhos/unidade 1/osso/2024/4- Abril/1-pt2.jpeg", "capturas/Retrabalhos/unidade 1/osso/2024/4- Abril/1-pt3.png", "capturas/Retrabalhos/unidade 1/osso/2024/4- Abril/1-pt4.jpeg", "capturas/Retrabalhos/unidade 1/osso/2024/4- Abril/1-G.jpeg"] },
            { data: "03/04/2024", captura: ["capturas/Retrabalhos/unidade 1/osso/2024/4- Abril/3-pt1.png", "capturas/Retrabalhos/unidade 1/osso/2024/4- Abril/3-pt2.jpeg", "capturas/Retrabalhos/unidade 1/osso/2024/4- Abril/3-pt3.png", "capturas/Retrabalhos/unidade 1/osso/2024/4- Abril/3-pt4.jpeg", "capturas/Retrabalhos/unidade 1/osso/2024/4- Abril/3-G.jpeg"] },
            { data: "04/04/2024", captura: ["capturas/Retrabalhos/unidade 1/osso/2024/4- Abril/4-pt1.jpeg", "capturas/Retrabalhos/unidade 1/osso/2024/4- Abril/4-pt2.jpeg", "capturas/Retrabalhos/unidade 1/osso/2024/4- Abril/4-pt3.png", "capturas/Retrabalhos/unidade 1/osso/2024/4- Abril/4-pt4.jpeg", "capturas/Retrabalhos/unidade 1/osso/2024/4- Abril/4-G.jpeg"] },
            { data: "05/04/2024", captura: ["capturas/Retrabalhos/unidade 1/osso/2024/4- Abril/5-pt1.jpeg", "capturas/Retrabalhos/unidade 1/osso/2024/4- Abril/5-pt2.jpeg", "capturas/Retrabalhos/unidade 1/osso/2024/4- Abril/5-pt3.png", "capturas/Retrabalhos/unidade 1/osso/2024/4- Abril/5-pt4.jpeg", "capturas/Retrabalhos/unidade 1/osso/2024/4- Abril/5-G.jpeg"] },
            { data: "08/04/2024", captura: ["capturas/Retrabalhos/unidade 1/osso/2024/4- Abril/8-pt1.png", "capturas/Retrabalhos/unidade 1/osso/2024/4- Abril/8-pt2.jpeg", "capturas/Retrabalhos/unidade 1/osso/2024/4- Abril/8-pt3.png", "capturas/Retrabalhos/unidade 1/osso/2024/4- Abril/8-pt4.jpeg", "capturas/Retrabalhos/unidade 1/osso/2024/4- Abril/8-G.jpeg"] },
            { data: "10/04/2024", captura: ["capturas/Retrabalhos/unidade 1/osso/2024/4- Abril/10-pt1.png", "capturas/Retrabalhos/unidade 1/osso/2024/4- Abril/10-pt2.jpeg", "capturas/Retrabalhos/unidade 1/osso/2024/4- Abril/10-pt3.png", "capturas/Retrabalhos/unidade 1/osso/2024/4- Abril/10-pt4.jpeg", "capturas/Retrabalhos/unidade 1/osso/2024/4- Abril/10-G.jpeg"] },
            { data: "12/04/2024", captura: ["capturas/Retrabalhos/unidade 1/osso/2024/4- Abril/12-pt1.jpeg", "capturas/Retrabalhos/unidade 1/osso/2024/4- Abril/12-pt2.jpeg", "capturas/Retrabalhos/unidade 1/osso/2024/4- Abril/12-pt3.png", "capturas/Retrabalhos/unidade 1/osso/2024/4- Abril/12-pt4.jpeg", "capturas/Retrabalhos/unidade 1/osso/2024/4- Abril/12-G.jpeg"] },
            { data: "16/04/2024", captura: ["capturas/Retrabalhos/unidade 1/osso/2024/4- Abril/16-pt1.png", "capturas/Retrabalhos/unidade 1/osso/2024/4- Abril/16-pt2.jpeg", "capturas/Retrabalhos/unidade 1/osso/2024/4- Abril/16-pt3.png", "capturas/Retrabalhos/unidade 1/osso/2024/4- Abril/16-pt4.jpeg", "capturas/Retrabalhos/unidade 1/osso/2024/4- Abril/16-G.jpeg"] },
            { data: "19/04/2024", captura: ["capturas/Retrabalhos/unidade 1/osso/2024/4- Abril/19-pt1.jpeg", "capturas/Retrabalhos/unidade 1/osso/2024/4- Abril/19-pt2.jpeg", "capturas/Retrabalhos/unidade 1/osso/2024/4- Abril/19-pt3.png", "capturas/Retrabalhos/unidade 1/osso/2024/4- Abril/19-pt4.jpeg", "capturas/Retrabalhos/unidade 1/osso/2024/4- Abril/19-G.jpeg"] },
            { data: "26/04/2024", captura: ["capturas/Retrabalhos/unidade 1/osso/2024/4- Abril/26-pt1.jpeg", "capturas/Retrabalhos/unidade 1/osso/2024/4- Abril/26-pt2.jpeg", "capturas/Retrabalhos/unidade 1/osso/2024/4- Abril/26-pt3.png", "capturas/Retrabalhos/unidade 1/osso/2024/4- Abril/26-pt4.jpeg", "capturas/Retrabalhos/unidade 1/osso/2024/4- Abril/26-G.jpeg"] },

            { data: "03/05/2024", captura: ["capturas/Retrabalhos/unidade 1/osso/2024/5- Maio/3-pt1.png", "capturas/Retrabalhos/unidade 1/osso/2024/5- Maio/3-pt2.jpeg", "capturas/Retrabalhos/unidade 1/osso/2024/5- Maio/3-pt3.png", "capturas/Retrabalhos/unidade 1/osso/2024/5- Maio/3-pt4.jpeg", "capturas/Retrabalhos/unidade 1/osso/2024/5- Maio/3-g.jpeg"] },
            { data: "06/05/2024", captura: ["capturas/Retrabalhos/unidade 1/osso/2024/5- Maio/6-pt1.png", "capturas/Retrabalhos/unidade 1/osso/2024/5- Maio/6-pt2.jpeg", "capturas/Retrabalhos/unidade 1/osso/2024/5- Maio/6-pt3.png", "capturas/Retrabalhos/unidade 1/osso/2024/5- Maio/6-pt4.jpeg", "capturas/Retrabalhos/unidade 1/osso/2024/5- Maio/6-g.jpeg"] },
            { data: "07/05/2024", captura: ["capturas/Retrabalhos/unidade 1/osso/2024/5- Maio/7-pt1.png", "capturas/Retrabalhos/unidade 1/osso/2024/5- Maio/7-pt2.jpeg", "capturas/Retrabalhos/unidade 1/osso/2024/5- Maio/7-pt3.png", "capturas/Retrabalhos/unidade 1/osso/2024/5- Maio/7-pt4.jpeg", "capturas/Retrabalhos/unidade 1/osso/2024/5- Maio/7-g.jpeg"] },
            { data: "09/05/2024", captura: ["capturas/Retrabalhos/unidade 1/osso/2024/5- Maio/9-pt1.png", "capturas/Retrabalhos/unidade 1/osso/2024/5- Maio/9-pt2.jpeg", "capturas/Retrabalhos/unidade 1/osso/2024/5- Maio/9-pt3.png", "capturas/Retrabalhos/unidade 1/osso/2024/5- Maio/9-pt4.jpeg", "capturas/Retrabalhos/unidade 1/osso/2024/5- Maio/9-g.jpeg"] },
            { data: "10/05/2024", captura: ["capturas/Retrabalhos/unidade 1/osso/2024/5- Maio/10-pt1.png", "capturas/Retrabalhos/unidade 1/osso/2024/5- Maio/10-pt2.jpeg", "capturas/Retrabalhos/unidade 1/osso/2024/5- Maio/10-pt3.png", "capturas/Retrabalhos/unidade 1/osso/2024/5- Maio/10-pt4.jpeg", "capturas/Retrabalhos/unidade 1/osso/2024/5- Maio/10-g.jpeg"] },
            { data: "14/05/2024", captura: ["capturas/Retrabalhos/unidade 1/osso/2024/5- Maio/14-pt1.png", "capturas/Retrabalhos/unidade 1/osso/2024/5- Maio/14-pt2.jpeg", "capturas/Retrabalhos/unidade 1/osso/2024/5- Maio/14-pt3.jpeg", "capturas/Retrabalhos/unidade 1/osso/2024/5- Maio/14-g.jpeg"] },
            { data: "16/05/2024", captura: ["capturas/Retrabalhos/unidade 1/osso/2024/5- Maio/16-pt1.png", "capturas/Retrabalhos/unidade 1/osso/2024/5- Maio/16-pt2.jpeg", "capturas/Retrabalhos/unidade 1/osso/2024/5- Maio/16-pt3.jpeg", "capturas/Retrabalhos/unidade 1/osso/2024/5- Maio/16-g.jpeg"] },
            { data: "17/05/2024", captura: ["capturas/Retrabalhos/unidade 1/osso/2024/5- Maio/17-pt1.png", "capturas/Retrabalhos/unidade 1/osso/2024/5- Maio/17-pt2.jpeg", "capturas/Retrabalhos/unidade 1/osso/2024/5- Maio/17-pt3.png", "capturas/Retrabalhos/unidade 1/osso/2024/5- Maio/17-pt4.jpeg", "capturas/Retrabalhos/unidade 1/osso/2024/5- Maio/17-g.jpeg"] },
            { data: "20/05/2024", captura: ["capturas/Retrabalhos/unidade 1/osso/2024/5- Maio/20-pt1.png", "capturas/Retrabalhos/unidade 1/osso/2024/5- Maio/20-pt2.jpeg", "capturas/Retrabalhos/unidade 1/osso/2024/5- Maio/20-pt3.jpeg", "capturas/Retrabalhos/unidade 1/osso/2024/5- Maio/20-g.jpeg"] },
            { data: "21/05/2024", captura: ["capturas/Retrabalhos/unidade 1/osso/2024/5- Maio/21-pt1.png", "capturas/Retrabalhos/unidade 1/osso/2024/5- Maio/21-pt2.jpeg", "capturas/Retrabalhos/unidade 1/osso/2024/5- Maio/21-pt3.jpeg", "capturas/Retrabalhos/unidade 1/osso/2024/5- Maio/21-g.jpeg"] },
            { data: "23/05/2024", captura: ["capturas/Retrabalhos/unidade 1/osso/2024/5- Maio/23 1pt.jpg", "capturas/Retrabalhos/unidade 1/osso/2024/5- Maio/23 2pt.jpg", "capturas/Retrabalhos/unidade 1/osso/2024/5- Maio/23 3pt.jpg", "capturas/Retrabalhos/unidade 1/osso/2024/5- Maio/23 4pt.jpg", "capturas/Retrabalhos/unidade 1/osso/2024/5- Maio/23 g.jpg"] },
            { data: "24/05/2024", captura: ["capturas/Retrabalhos/unidade 1/osso/2024/5- Maio/24-pt1.jpeg", "capturas/Retrabalhos/unidade 1/osso/2024/5- Maio/24-pt2.jpeg", "capturas/Retrabalhos/unidade 1/osso/2024/5- Maio/24-pt3.png", "capturas/Retrabalhos/unidade 1/osso/2024/5- Maio/24-pt4.jpeg", "capturas/Retrabalhos/unidade 1/osso/2024/5- Maio/24-g.jpeg"] },
            { data: "27/05/2024", captura: ["capturas/Retrabalhos/unidade 1/osso/2024/5- Maio/27-pt1.png", "capturas/Retrabalhos/unidade 1/osso/2024/5- Maio/27-pt2.jpeg", "capturas/Retrabalhos/unidade 1/osso/2024/5- Maio/27-pt3.jpeg", "capturas/Retrabalhos/unidade 1/osso/2024/5- Maio/27-g.jpeg"] },
            { data: "29/05/2024", captura: ["capturas/Retrabalhos/unidade 1/osso/2024/5- Maio/29-pt1.png", "capturas/Retrabalhos/unidade 1/osso/2024/5- Maio/29-pt2.jpeg", "capturas/Retrabalhos/unidade 1/osso/2024/5- Maio/29-pt3.jpeg", "capturas/Retrabalhos/unidade 1/osso/2024/5- Maio/29-g.jpeg"] },
            { data: "30/05/2024", captura: ["capturas/Retrabalhos/unidade 1/osso/2024/5- Maio/30-pt1.png", "capturas/Retrabalhos/unidade 1/osso/2024/5- Maio/30-pt2.jpeg", "capturas/Retrabalhos/unidade 1/osso/2024/5- Maio/30-pt3.png", "capturas/Retrabalhos/unidade 1/osso/2024/5- Maio/30-pt4.jpeg", "capturas/Retrabalhos/unidade 1/osso/2024/5- Maio/30-g.jpeg"] },

            { data: "07/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 1/Osso/7-pt1.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Osso/7-pt2.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Osso/7-pt3.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Osso/7-g.jpeg"] },
            { data: "11/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 1/Osso/11-pt1.png", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Osso/11-pt2.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Osso/11-pt3.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Osso/11-g.jpeg"] },
            { data: "13/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 1/Osso/13-pt1.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Osso/13-pt2.png", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Osso/13-pt3.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Osso/13-pt4.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Osso/13-g.jpeg"] },
            { data: "14/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 1/Osso/14-pt1.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Osso/14-pt2.png", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Osso/14-pt3.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Osso/14-pt4.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Osso/14-g.jpeg"] },
            { data: "17/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 1/Osso/17-pt1.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Osso/17-pt2.png", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Osso/17-pt3.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Osso/17-pt4.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Osso/17-g.jpeg"] },
            { data: "18/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 1/Osso/18-pt1.png", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Osso/18-pt2.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Osso/18-pt3.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Osso/18-g.jpeg"] },
            { data: "19/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 1/Osso/19-pt1.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Osso/19-pt2.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Osso/19-pt3.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Osso/19-g.jpeg"] },
            { data: "21/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 1/Osso/21-pt1.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Osso/21-pt2.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Osso/21-pt3.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Osso/21-pt4.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Osso/21-g.jpeg"] },
            { data: "28/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 1/Osso/28-pt1.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Osso/28-pt2.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Osso/28-pt3.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Osso/28-ptg.jpeg"] },

            { data: "05/07/2024", captura: ["capturas/Retrabalhos/2024/7- Julho/Unidade 1/Osso/5-pt1.jpeg", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/Osso/5-pt2.jpeg", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/Osso/5-pt3.jpeg", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/Osso/5-pt4.jpeg"] },
            { data: "09/07/2024", captura: ["capturas/Retrabalhos/2024/7- Julho/Unidade 1/Osso/9-pt1.png", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/Osso/9-pt2.jpeg", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/Osso/9-pt3.jpeg", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/Osso/9-pt4.jpeg"] },
            { data: "12/07/2024", captura: ["capturas/Retrabalhos/2024/7- Julho/Unidade 1/Osso/12-pt1.jpeg", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/Osso/12-pt2.jpeg", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/Osso/12-pt3.jpeg", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/Osso/12-pt4.jpeg"] },
            { data: "19/07/2024", captura: ["capturas/Retrabalhos/2024/7- Julho/Unidade 1/Osso/19 1PT.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/Osso/19 2PT.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/Osso/19 3PT.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/Osso/19 3PT.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/Osso/19 4PT.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/Osso/19 G.jpg"] },


            // { data: "", captura: [""] },
            // { data: "", captura: [""] },
        ],

        Usinagem: [
            { data: "25/11/2023", captura: ["capturas/Retrabalhos/unidade 1/usinagem/11- Novembro/20-25.png"] },
            { data: "02/12/2023", captura: ["capturas/Retrabalhos/unidade 1/usinagem/11- Novembro/27.png"] },

            { data: "09/12/2023", captura: ["capturas/Retrabalhos/unidade 1/usinagem/12-Dezembro/SEMANA 04-12 ÀS 09-12.png"] },

            { data: "16/12/2023", captura: ["capturas/Retrabalhos/unidade 1/usinagem/12-Dezembro/11-12 À 15-12.png"] },

            { data: "20/12/2023", captura: ["capturas/Retrabalhos/unidade 1/usinagem/12-Dezembro/18-12 À 20-12.png"] },

            { data: "12/01/2024", captura: ["capturas/Retrabalhos/unidade 1/usinagem/2024/1- Janeiro/09-01 À 12-01.png"] },
            { data: "19/01/2024", captura: ["capturas/Retrabalhos/unidade 1/usinagem/2024/1- Janeiro/15-01 À 19-01.png"] },
            { data: "26/01/2024", captura: ["capturas/Retrabalhos/unidade 1/usinagem/2024/1- Janeiro/22-01 À 26-01.png"] },

            { data: "02/02/2024", captura: ["capturas/Retrabalhos/unidade 1/usinagem/2024/2- Fevereiro/29-01 à 02-02.png"] },
            { data: "05/02/2024", captura: ["capturas/Retrabalhos/unidade 1/usinagem/2024/2- Fevereiro/05-07.png"] },
            { data: "23/02/2024", captura: ["capturas/Retrabalhos/unidade 1/usinagem/2024/2- Fevereiro/19-23.png"] },
            { data: "26/02/2024", captura: ["capturas/Retrabalhos/unidade 1/usinagem/2024/3- Março/26-02.png"] },

            { data: "07/03/2024", captura: ["capturas/Retrabalhos/unidade 1/usinagem/2024/3- Março/7.png"] },
            { data: "08/03/2024", captura: ["capturas/Retrabalhos/unidade 1/usinagem/2024/3- Março/8.png"] },
            { data: "11/03/2024", captura: ["capturas/Retrabalhos/unidade 1/usinagem/2024/3- Março/11.png"] },
            { data: "12/03/2024", captura: ["capturas/Retrabalhos/unidade 1/usinagem/2024/3- Março/12.png"] },
            { data: "15/03/2024", captura: ["capturas/Retrabalhos/unidade 1/usinagem/2024/3- Março/15.jpg"] },
            { data: "18/03/2024", captura: ["capturas/Retrabalhos/unidade 1/usinagem/2024/3- Março/18-pt1.png", "capturas/Retrabalhos/unidade 1/usinagem/2024/3- Março/18-pt2.png", "capturas/Retrabalhos/unidade 1/usinagem/2024/3- Março/18-pt3.png", "capturas/Retrabalhos/unidade 1/usinagem/2024/3- Março/18-pt4.png", "capturas/Retrabalhos/unidade 1/usinagem/2024/3- Março/18-pt5.png", "capturas/Retrabalhos/unidade 1/usinagem/2024/3- Março/18-pt6.png", "capturas/Retrabalhos/unidade 1/usinagem/2024/3- Março/18-pt7.png", "capturas/Retrabalhos/unidade 1/usinagem/2024/3- Março/18-pt8.png"] },
            { data: "19/03/2024", captura: ["capturas/Retrabalhos/unidade 1/usinagem/2024/3- Março/19-pt1.png", "capturas/Retrabalhos/unidade 1/usinagem/2024/3- Março/19-pt2.png", "capturas/Retrabalhos/unidade 1/usinagem/2024/3- Março/19-pt3.png", "capturas/Retrabalhos/unidade 1/usinagem/2024/3- Março/19-pt4.png", "capturas/Retrabalhos/unidade 1/usinagem/2024/3- Março/19-pt5.png", "capturas/Retrabalhos/unidade 1/usinagem/2024/3- Março/19-pt6.png"] },
            { data: "20/03/2024", captura: ["capturas/Retrabalhos/unidade 1/usinagem/2024/3- Março/20-pt1.png", "capturas/Retrabalhos/unidade 1/usinagem/2024/3- Março/20-pt2.png", "capturas/Retrabalhos/unidade 1/usinagem/2024/3- Março/20-pt3.png", "capturas/Retrabalhos/unidade 1/usinagem/2024/3- Março/20-pt4.png", "capturas/Retrabalhos/unidade 1/usinagem/2024/3- Março/20-pt5.png", "capturas/Retrabalhos/unidade 1/usinagem/2024/3- Março/20-pt6.png"] },
            { data: "21/03/2024", captura: ["capturas/Retrabalhos/unidade 1/usinagem/2024/3- Março/21-pt1.png", "capturas/Retrabalhos/unidade 1/usinagem/2024/3- Março/21-pt2.png", "capturas/Retrabalhos/unidade 1/usinagem/2024/3- Março/21-pt3.png", "capturas/Retrabalhos/unidade 1/usinagem/2024/3- Março/21-pt4.png", "capturas/Retrabalhos/unidade 1/usinagem/2024/3- Março/21-pt5.png", "capturas/Retrabalhos/unidade 1/usinagem/2024/3- Março/21-pt6.png", "capturas/Retrabalhos/unidade 1/usinagem/2024/3- Março/21-G.png"] },
            { data: "22/03/2024", captura: ["capturas/Retrabalhos/unidade 1/usinagem/2024/3- Março/22-pt1.png", "capturas/Retrabalhos/unidade 1/usinagem/2024/3- Março/22-pt2.jpeg", "capturas/Retrabalhos/unidade 1/usinagem/2024/3- Março/22-pt3.jpg", "capturas/Retrabalhos/unidade 1/usinagem/2024/3- Março/22-pt4.jpeg", "capturas/Retrabalhos/unidade 1/usinagem/2024/3- Março/22-G.jpeg"] },
            { data: "25/03/2024", captura: ["capturas/Retrabalhos/unidade 1/usinagem/2024/3- Março/25-pt1.png", "capturas/Retrabalhos/unidade 1/usinagem/2024/3- Março/25-pt2.jpeg", "capturas/Retrabalhos/unidade 1/usinagem/2024/3- Março/25-pt3.png", "capturas/Retrabalhos/unidade 1/usinagem/2024/3- Março/25-pt4.jpeg", "capturas/Retrabalhos/unidade 1/usinagem/2024/3- Março/25-G.jpeg"] },
            { data: "26/03/2024", captura: ["capturas/Retrabalhos/unidade 1/usinagem/2024/3- Março/26-pt1.png", "capturas/Retrabalhos/unidade 1/usinagem/2024/3- Março/26-pt2.jpeg", "capturas/Retrabalhos/unidade 1/usinagem/2024/3- Março/26-pt3.png", "capturas/Retrabalhos/unidade 1/usinagem/2024/3- Março/26-pt4.jpeg", "capturas/Retrabalhos/unidade 1/usinagem/2024/3- Março/26-G.jpeg"] },
            { data: "27/03/2024", captura: ["capturas/Retrabalhos/unidade 1/osso/2024/3- Março/27-pt1.png", "capturas/Retrabalhos/unidade 1/osso/2024/3- Março/27-pt2.jpeg", "capturas/Retrabalhos/unidade 1/osso/2024/3- Março/27-pt3.png", "capturas/Retrabalhos/unidade 1/osso/2024/3- Março/27-pt4.jpeg", "capturas/Retrabalhos/unidade 1/osso/2024/3- Março/27-G.jpeg"] },
            { data: "28/03/2024", captura: ["capturas/Retrabalhos/unidade 1/usinagem/2024/3- Março/28-pt1.png", "capturas/Retrabalhos/unidade 1/usinagem/2024/3- Março/28-pt2.jpeg", "capturas/Retrabalhos/unidade 1/usinagem/2024/3- Março/28-pt3.png", "capturas/Retrabalhos/unidade 1/usinagem/2024/3- Março/28-pt4.jpeg", "capturas/Retrabalhos/unidade 1/usinagem/2024/3- Março/28-G.jpeg"] },

            { data: "01/04/2024", captura: ["capturas/Retrabalhos/unidade 1/usinagem/2024/4- Abril/1-pt1.png", "capturas/Retrabalhos/unidade 1/usinagem/2024/4- Abril/1-pt2.jpeg", "capturas/Retrabalhos/unidade 1/usinagem/2024/4- Abril/1-pt3.png", "capturas/Retrabalhos/unidade 1/usinagem/2024/4- Abril/1-pt4.jpeg", "capturas/Retrabalhos/unidade 1/usinagem/2024/4- Abril/1-G.jpeg"] },
            { data: "03/04/2024", captura: ["capturas/Retrabalhos/unidade 1/usinagem/2024/4- Abril/3-pt1.png", "capturas/Retrabalhos/unidade 1/usinagem/2024/4- Abril/3-pt2.jpeg", "capturas/Retrabalhos/unidade 1/usinagem/2024/4- Abril/3-pt3.png", "capturas/Retrabalhos/unidade 1/usinagem/2024/4- Abril/3-pt4.jpeg", "capturas/Retrabalhos/unidade 1/usinagem/2024/4- Abril/3-G.jpeg"] },
            { data: "04/04/2024", captura: ["capturas/Retrabalhos/unidade 1/usinagem/2024/4- Abril/4-pt1.png", "capturas/Retrabalhos/unidade 1/usinagem/2024/4- Abril/4-pt2.jpeg", "capturas/Retrabalhos/unidade 1/usinagem/2024/4- Abril/4-pt3.png", "capturas/Retrabalhos/unidade 1/usinagem/2024/4- Abril/4-pt4.jpeg", "capturas/Retrabalhos/unidade 1/usinagem/2024/4- Abril/4-G.jpeg"] },
            { data: "05/04/2024", captura: ["capturas/Retrabalhos/unidade 1/usinagem/2024/4- Abril/5-pt1.png", "capturas/Retrabalhos/unidade 1/usinagem/2024/4- Abril/5-pt2.jpeg", "capturas/Retrabalhos/unidade 1/usinagem/2024/4- Abril/5-pt3.png", "capturas/Retrabalhos/unidade 1/usinagem/2024/4- Abril/5-pt4.jpeg", "capturas/Retrabalhos/unidade 1/usinagem/2024/4- Abril/5-G.jpeg"] },
            { data: "08/04/2024", captura: ["capturas/Retrabalhos/unidade 1/usinagem/2024/4- Abril/8-pt1.png", "capturas/Retrabalhos/unidade 1/usinagem/2024/4- Abril/8-pt2.jpeg", "capturas/Retrabalhos/unidade 1/usinagem/2024/4- Abril/8-pt3.png", "capturas/Retrabalhos/unidade 1/usinagem/2024/4- Abril/8-pt4.jpeg", "capturas/Retrabalhos/unidade 1/usinagem/2024/4- Abril/8-G.jpeg"] },
            { data: "10/04/2024", captura: ["capturas/Retrabalhos/unidade 1/usinagem/2024/4- Abril/10-pt1.png", "capturas/Retrabalhos/unidade 1/usinagem/2024/4- Abril/10-pt2.jpeg", "capturas/Retrabalhos/unidade 1/usinagem/2024/4- Abril/10-pt3.png", "capturas/Retrabalhos/unidade 1/usinagem/2024/4- Abril/10-pt4.jpeg", "capturas/Retrabalhos/unidade 1/usinagem/2024/4- Abril/10-G.jpeg"] },
            { data: "12/04/2024", captura: ["capturas/Retrabalhos/unidade 1/usinagem/2024/4- Abril/12-pt1.png", "capturas/Retrabalhos/unidade 1/usinagem/2024/4- Abril/12-pt2.jpeg", "capturas/Retrabalhos/unidade 1/usinagem/2024/4- Abril/12-pt3.png", "capturas/Retrabalhos/unidade 1/usinagem/2024/4- Abril/12-pt4.jpeg", "capturas/Retrabalhos/unidade 1/usinagem/2024/4- Abril/12-G.jpeg"] },
            { data: "16/04/2024", captura: ["capturas/Retrabalhos/unidade 1/usinagem/2024/4- Abril/16-pt1.png", "capturas/Retrabalhos/unidade 1/usinagem/2024/4- Abril/16-pt2.jpeg", "capturas/Retrabalhos/unidade 1/usinagem/2024/4- Abril/16-pt3.png", "capturas/Retrabalhos/unidade 1/usinagem/2024/4- Abril/16-pt4.jpeg", "capturas/Retrabalhos/unidade 1/usinagem/2024/4- Abril/16-G.jpeg"] },
            { data: "19/04/2024", captura: ["capturas/Retrabalhos/unidade 1/usinagem/2024/4- Abril/19-pt1.png", "capturas/Retrabalhos/unidade 1/usinagem/2024/4- Abril/19-pt2.jpeg", "capturas/Retrabalhos/unidade 1/usinagem/2024/4- Abril/19-pt3.png", "capturas/Retrabalhos/unidade 1/usinagem/2024/4- Abril/19-pt4.jpeg", "capturas/Retrabalhos/unidade 1/usinagem/2024/4- Abril/19-G.jpeg"] },
            { data: "26/04/2024", captura: ["capturas/Retrabalhos/unidade 1/usinagem/2024/4- Abril/26-pt1.png", "capturas/Retrabalhos/unidade 1/usinagem/2024/4- Abril/26-pt2.jpeg", "capturas/Retrabalhos/unidade 1/usinagem/2024/4- Abril/26-pt3.png", "capturas/Retrabalhos/unidade 1/usinagem/2024/4- Abril/26-pt4.jpeg", "capturas/Retrabalhos/unidade 1/usinagem/2024/4- Abril/26-G.jpeg"] },

            { data: "03/05/2024", captura: ["capturas/Retrabalhos/unidade 1/usinagem/2024/5- Maio/3-pt1.png", "capturas/Retrabalhos/unidade 1/usinagem/2024/5- Maio/3-pt2.jpeg", "capturas/Retrabalhos/unidade 1/usinagem/2024/5- Maio/3-pt3.png", "capturas/Retrabalhos/unidade 1/usinagem/2024/5- Maio/3-pt4.jpeg", "capturas/Retrabalhos/unidade 1/usinagem/2024/5- Maio/3-g.jpeg"] },
            { data: "06/05/2024", captura: ["capturas/Retrabalhos/unidade 1/usinagem/2024/5- Maio/6-pt1.png", "capturas/Retrabalhos/unidade 1/usinagem/2024/5- Maio/6-pt2.jpeg", "capturas/Retrabalhos/unidade 1/usinagem/2024/5- Maio/6-pt3.png", "capturas/Retrabalhos/unidade 1/usinagem/2024/5- Maio/6-pt4.jpeg", "capturas/Retrabalhos/unidade 1/usinagem/2024/5- Maio/6-g.jpeg"] },
            { data: "07/05/2024", captura: ["capturas/Retrabalhos/unidade 1/usinagem/2024/5- Maio/7-pt1.png", "capturas/Retrabalhos/unidade 1/usinagem/2024/5- Maio/6-pt2.jpeg", "capturas/Retrabalhos/unidade 1/usinagem/2024/5- Maio/7-pt3.png", "capturas/Retrabalhos/unidade 1/usinagem/2024/5- Maio/6-pt4.jpeg", "capturas/Retrabalhos/unidade 1/usinagem/2024/5- Maio/6-g.jpeg"] },
            { data: "09/05/2024", captura: ["capturas/Retrabalhos/unidade 1/usinagem/2024/5- Maio/9-pt1.png", "capturas/Retrabalhos/unidade 1/usinagem/2024/5- Maio/6-pt2.jpeg", "capturas/Retrabalhos/unidade 1/usinagem/2024/5- Maio/9-pt3.png", "capturas/Retrabalhos/unidade 1/usinagem/2024/5- Maio/9-pt4.jpeg", "capturas/Retrabalhos/unidade 1/usinagem/2024/5- Maio/9-g.jpeg"] },
            { data: "10/05/2024", captura: ["capturas/Retrabalhos/unidade 1/usinagem/2024/5- Maio/10-pt1.png", "capturas/Retrabalhos/unidade 1/usinagem/2024/5- Maio/6-pt2.jpeg", "capturas/Retrabalhos/unidade 1/usinagem/2024/5- Maio/10-pt4.jpeg", "capturas/Retrabalhos/unidade 1/usinagem/2024/5- Maio/10-g.jpeg"] },
            { data: "13/05/2024", captura: ["capturas/Retrabalhos/unidade 1/usinagem/2024/5- Maio/13-pt1.png", "capturas/Retrabalhos/unidade 1/usinagem/2024/5- Maio/13-pt2.jpeg", "capturas/Retrabalhos/unidade 1/usinagem/2024/5- Maio/13-pt3.jpeg", "capturas/Retrabalhos/unidade 1/usinagem/2024/5- Maio/13-g.jpeg"] },
            { data: "14/05/2024", captura: ["capturas/Retrabalhos/unidade 1/usinagem/2024/5- Maio/14-pt1.png", "capturas/Retrabalhos/unidade 1/usinagem/2024/5- Maio/14-pt2.jpeg", "capturas/Retrabalhos/unidade 1/usinagem/2024/5- Maio/14-pt3.jpeg", "capturas/Retrabalhos/unidade 1/usinagem/2024/5- Maio/14-g.jpeg"] },
            { data: "16/05/2024", captura: ["capturas/Retrabalhos/unidade 1/usinagem/2024/5- Maio/16-pt1.png", "capturas/Retrabalhos/unidade 1/usinagem/2024/5- Maio/16-pt2.jpeg", "capturas/Retrabalhos/unidade 1/usinagem/2024/5- Maio/16-pt3.jpeg", "capturas/Retrabalhos/unidade 1/usinagem/2024/5- Maio/16-g.jpeg"] },
            { data: "17/05/2024", captura: ["capturas/Retrabalhos/unidade 1/usinagem/2024/5- Maio/17-pt1.png", "capturas/Retrabalhos/unidade 1/usinagem/2024/5- Maio/17-pt2.jpeg", "capturas/Retrabalhos/unidade 1/usinagem/2024/5- Maio/17-pt4.jpeg", "capturas/Retrabalhos/unidade 1/usinagem/2024/5- Maio/17-g.jpeg"] },
            { data: "20/05/2024", captura: ["capturas/Retrabalhos/unidade 1/usinagem/2024/5- Maio/20-pt1.png", "capturas/Retrabalhos/unidade 1/usinagem/2024/5- Maio/20-pt2.jpeg", "capturas/Retrabalhos/unidade 1/usinagem/2024/5- Maio/20-pt3.jpeg", "capturas/Retrabalhos/unidade 1/usinagem/2024/5- Maio/20-g.jpeg"] },
            { data: "21/05/2024", captura: ["capturas/Retrabalhos/unidade 1/usinagem/2024/5- Maio/21-pt1.png", "capturas/Retrabalhos/unidade 1/usinagem/2024/5- Maio/20-pt2.jpeg", "capturas/Retrabalhos/unidade 1/usinagem/2024/5- Maio/20-pt3.jpeg", "capturas/Retrabalhos/unidade 1/usinagem/2024/5- Maio/20-g.jpeg"] },
            { data: "23/05/2024", captura: ["capturas/Retrabalhos/unidade 1/usinagem/2024/5- Maio/23 1pt.jpg", "capturas/Retrabalhos/unidade 1/usinagem/2024/5- Maio/23 2pt.jpg", "capturas/Retrabalhos/unidade 1/usinagem/2024/5- Maio/23 3pt.jpg", "capturas/Retrabalhos/unidade 1/usinagem/2024/5- Maio/23 4pt.jpg", "capturas/Retrabalhos/unidade 1/usinagem/2024/5- Maio/23 g.jpg"] },
            { data: "24/05/2024", captura: ["capturas/Retrabalhos/unidade 1/usinagem/2024/5- Maio/24-pt1.png", "capturas/Retrabalhos/unidade 1/usinagem/2024/5- Maio/24-pt2.jpeg", "capturas/Retrabalhos/unidade 1/usinagem/2024/5- Maio/24-pt3.jpeg", "capturas/Retrabalhos/unidade 1/usinagem/2024/5- Maio/24-g.jpeg"] },
            { data: "27/05/2024", captura: ["capturas/Retrabalhos/unidade 1/usinagem/2024/5- Maio/27-pt1.png", "capturas/Retrabalhos/unidade 1/usinagem/2024/5- Maio/27-pt2.jpeg", "capturas/Retrabalhos/unidade 1/usinagem/2024/5- Maio/27-pt3.jpeg", "capturas/Retrabalhos/unidade 1/usinagem/2024/5- Maio/27-g.jpeg"] },
            { data: "29/05/2024", captura: ["capturas/Retrabalhos/unidade 1/usinagem/2024/5- Maio/29-pt1.png", "capturas/Retrabalhos/unidade 1/usinagem/2024/5- Maio/29-pt2.jpeg", "capturas/Retrabalhos/unidade 1/usinagem/2024/5- Maio/29-pt3.jpeg", "capturas/Retrabalhos/unidade 1/usinagem/2024/5- Maio/29-g.jpeg"] },
            { data: "30/05/2024", captura: ["capturas/Retrabalhos/unidade 1/usinagem/2024/5- Maio/30-pt1.png", "capturas/Retrabalhos/unidade 1/usinagem/2024/5- Maio/30-pt2.jpeg", "capturas/Retrabalhos/unidade 1/usinagem/2024/5- Maio/30-pt3.jpeg", "capturas/Retrabalhos/unidade 1/usinagem/2024/5- Maio/30-g.jpeg"] },

            { data: "07/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 1/Usinagem/7-pt1.png", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Usinagem/7-pt2.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Usinagem/7-pt3.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Usinagem/7-g.jpeg"] },
            { data: "11/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 1/Usinagem/11-pt1.png", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Usinagem/11-pt2.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Usinagem/11-pt3.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Usinagem/11-g.jpeg"] },
            { data: "13/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 1/Usinagem/13-pt1.png", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Usinagem/13-pt2.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Usinagem/13-pt3.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Usinagem/13-g.jpeg"] },
            { data: "14/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 1/Usinagem/14-pt1.png", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Usinagem/14-pt2.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Usinagem/14-pt3.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Usinagem/14-g.jpeg"] },
            { data: "17/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 1/Usinagem/17-pt1.png", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Usinagem/17-pt2.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Usinagem/17-pt3.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Usinagem/17-g.jpeg"] },
            { data: "18/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 1/Usinagem/18-pt1.png", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Usinagem/18-pt2.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Usinagem/18-pt3.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Usinagem/18-g.jpeg"] },
            { data: "19/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 1/Usinagem/19-pt1.png", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Usinagem/19-pt2.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Usinagem/19-pt3.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Usinagem/19-g.jpeg"] },
            { data: "21/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 1/Usinagem/21-pt1.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Usinagem/21-pt2.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Usinagem/21-pt3.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Usinagem/21-g.jpeg"] },
            { data: "28/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 1/Usinagem/28-pt1.png", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Usinagem/28-pt2.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Usinagem/28-pt3.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 1/Usinagem/28-ptg.jpeg"] },

            { data: "05/07/2024", captura: ["capturas/Retrabalhos/2024/7- Julho/Unidade 1/Usinagem/5-pt1.png", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/Usinagem/5-pt2.jpeg", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/Usinagem/5-pt3.jpeg", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/Usinagem/5-pt4.jpeg"] },
            { data: "09/07/2024", captura: ["capturas/Retrabalhos/2024/7- Julho/Unidade 1/Usinagem/9-pt1.png", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/Usinagem/9-pt2.jpeg", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/Usinagem/9-pt3.jpeg", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/Usinagem/9-pt4.jpeg"] },
            { data: "12/07/2024", captura: ["capturas/Retrabalhos/2024/7- Julho/Unidade 1/Usinagem/12-pt1.jpeg", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/Usinagem/12-pt2.jpeg", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/Usinagem/12-pt3.jpeg", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/Usinagem/12-pt4.jpeg"] },
            { data: "19/07/2024", captura: ["capturas/Retrabalhos/2024/7- Julho/Unidade 1/Usinagem/19 1PT.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/Usinagem/19 2PT.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/Usinagem/19 3PT.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/Usinagem/19 4PT.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 1/Usinagem/19 G.jpg"] },


            // { data: "", captura: [""] },
            // { data: "", captura: [""] },
        ],
    },

    UR2: {
        Us_curvado: [
            { data: "25/11/2023", captura: ["capturas/Retrabalhos/unidade 2/Curvados/11- Novembro/20-25.png"] },
            { data: "02/12/2023", captura: ["capturas/Retrabalhos/unidade 2/Curvados/11- Novembro/27.png"] },

            { data: "09/12/2023", captura: ["capturas/Retrabalhos/unidade 2/Curvados/12- Dezembro/SEMANA 04-12 À 09-12.png"] },

            { data: "16/12/2023", captura: ["capturas/Retrabalhos/unidade 2/Curvados/12- Dezembro/SEMANA 11-12 À 15-12.png"] },

            { data: "20/12/2023", captura: ["capturas/Retrabalhos/unidade 2/Curvados/12- Dezembro/SEMANA 18-12 À 20-12.png"] },

            { data: "12/01/2024", captura: ["capturas/Retrabalhos/unidade 2/Curvados/2024/1- Janeiro/09-01 À 12-01.png"] },
            { data: "19/01/2024", captura: ["capturas/Retrabalhos/unidade 2/Curvados/2024/1- Janeiro/15-01 À 19-01.png"] },
            { data: "26/01/2024", captura: ["capturas/Retrabalhos/unidade 2/Curvados/2024/1- Janeiro/22-01 À 26-01.png"] },

            { data: "02/02/2024", captura: ["capturas/Retrabalhos/unidade 2/Curvados/2024/2- Fevereiro/29-01 à 02-02.png"] },
            { data: "05/02/2024", captura: ["capturas/Retrabalhos/unidade 2/Curvados/2024/2- Fevereiro/05-07.png"] },
            { data: "23/02/2024", captura: ["capturas/Retrabalhos/unidade 2/Curvados/2024/2- Fevereiro/19-23.png"] },
            { data: "26/02/2024", captura: ["capturas/Retrabalhos/unidade 2/Curvados/2024/3- Março/1.png"] },

            { data: "01/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Curvados/2024/3- Março/1.png"] },
            { data: "07/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Curvados/2024/3- Março/7.png"] },
            { data: "08/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Curvados/2024/3- Março/8.png"] },
            { data: "11/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Curvados/2024/3- Março/11.png"] },
            { data: "12/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Curvados/2024/3- Março/12.png"] },
            { data: "13/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Curvados/2024/3- Março/13.png"] },
            { data: "15/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Curvados/2024/3- Março/15.jpg"] },
            { data: "18/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Curvados/2024/3- Março/18-pt1.png", "capturas/Retrabalhos/unidade 2/Curvados/2024/3- Março/18-pt2.png", "capturas/Retrabalhos/unidade 2/Curvados/2024/3- Março/18-pt3.png"] },
            { data: "19/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Curvados/2024/3- Março/19-pt1.png", "capturas/Retrabalhos/unidade 2/Curvados/2024/3- Março/19-pt2.png"] },
            { data: "20/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Curvados/2024/3- Março/20 PÇS.jpg", "capturas/Retrabalhos/unidade 2/Curvados/2024/3- Março/20 GRAF.jpg"] },
            { data: "21/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Curvados/2024/3- Março/21-pt1.png", "capturas/Retrabalhos/unidade 2/Curvados/2024/3- Março/21-pt2.png", "capturas/Retrabalhos/unidade 2/Curvados/2024/3- Março/21-pt3.png", "capturas/Retrabalhos/unidade 2/Curvados/2024/3- Março/21-G.png"] },
            { data: "22/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Curvados/2024/3- Março/22-pt1.png", "capturas/Retrabalhos/unidade 2/Curvados/2024/3- Março/22-pt2.jpeg", "capturas/Retrabalhos/unidade 2/Curvados/2024/3- Março/22-G.jpeg"] },
            { data: "25/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Curvados/2024/3- Março/25-pt1.png", "capturas/Retrabalhos/unidade 2/Curvados/2024/3- Março/25-pt2.jpeg", "capturas/Retrabalhos/unidade 2/Curvados/2024/3- Março/25-G.jpeg"] },
            { data: "26/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Curvados/2024/3- Março/26-pt1.png", "capturas/Retrabalhos/unidade 2/Curvados/2024/3- Março/26-pt2.jpeg", "capturas/Retrabalhos/unidade 2/Curvados/2024/3- Março/26-G.jpeg"] },
            { data: "27/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Curvados/2024/3- Março/27 PÇS.jpg", "capturas/Retrabalhos/unidade 2/Curvados/2024/3- Março/27 GRAFICO.jpg", "capturas/Retrabalhos/unidade 2/Curvados/2024/3- Março/27 INFINITO.jpg"] },
            { data: "28/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Curvados/2024/3- Março/28 PÇS.jpg", "capturas/Retrabalhos/unidade 2/Curvados/2024/3- Março/28 GRAFICO.jpg", "capturas/Retrabalhos/unidade 2/Curvados/2024/3- Março/28 INFINITO.jpg"] },

            { data: "01/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Curvados/2024/4- Abril/01 pçs.jpg", "capturas/Retrabalhos/unidade 2/Curvados/2024/4- Abril/01 grafico.jpg", "capturas/Retrabalhos/unidade 2/Curvados/2024/4- Abril/01 infinito.jpg"] },
            { data: "02/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Curvados/2024/4- Abril/02 pçs.png", "capturas/Retrabalhos/unidade 2/Curvados/2024/4- Abril/02 grafico.png", "capturas/Retrabalhos/unidade 2/Curvados/2024/4- Abril/02 infinito.png"] },
            { data: "03/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Curvados/2024/4- Abril/03 pçs.jpg", "capturas/Retrabalhos/unidade 2/Curvados/2024/4- Abril/03 grafico.jpg", "capturas/Retrabalhos/unidade 2/Curvados/2024/4- Abril/03 infinito.jpg"] },
            { data: "04/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Curvados/2024/4- Abril/04 pçs.jpg", "capturas/Retrabalhos/unidade 2/Curvados/2024/4- Abril/04 grafico.jpg", "capturas/Retrabalhos/unidade 2/Curvados/2024/4- Abril/04 infinito.jpg"] },
            { data: "05/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Curvados/2024/4- Abril/05 pçs.jpg", "capturas/Retrabalhos/unidade 2/Curvados/2024/4- Abril/05 grafico.jpg", "capturas/Retrabalhos/unidade 2/Curvados/2024/4- Abril/05 infinito.jpg"] },
            { data: "08/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Curvados/2024/4- Abril/08 pçs.jpg", "capturas/Retrabalhos/unidade 2/Curvados/2024/4- Abril/08  grafico.jpg", "capturas/Retrabalhos/unidade 2/Curvados/2024/4- Abril/08 infinito.jpg"] },
            { data: "09/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Curvados/2024/4- Abril/09 pçs.jpg", "capturas/Retrabalhos/unidade 2/Curvados/2024/4- Abril/09  grafico.jpg", "capturas/Retrabalhos/unidade 2/Curvados/2024/4- Abril/09 infinito.jpg"] },
            { data: "10/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Curvados/2024/4- Abril/10 pçs.jpg", "capturas/Retrabalhos/unidade 2/Curvados/2024/4- Abril/10 grafico.jpg", "capturas/Retrabalhos/unidade 2/Curvados/2024/4- Abril/10 infinito.jpg"] },
            { data: "12/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Curvados/2024/4- Abril/12 pçs.jpg", "capturas/Retrabalhos/unidade 2/Curvados/2024/4- Abril/12 grafico.jpeg", "capturas/Retrabalhos/unidade 2/Curvados/2024/4- Abril/12 infinito.jpeg"] },
            { data: "16/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Curvados/2024/4- Abril/16 pçs.jpg", "capturas/Retrabalhos/unidade 2/Curvados/2024/4- Abril/16 grafico.jpg", "capturas/Retrabalhos/unidade 2/Curvados/2024/4- Abril/16 infinito.jpg"] },
            { data: "19/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Curvados/2024/4- Abril/19 pçs.jpg", "capturas/Retrabalhos/unidade 2/Curvados/2024/4- Abril/19 grafico.jpg", "capturas/Retrabalhos/unidade 2/Curvados/2024/4- Abril/19 infinito.jpg"] },
            { data: "24/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Curvados/2024/4- Abril/24 pçs.jpg", "capturas/Retrabalhos/unidade 2/Curvados/2024/4- Abril/24 grafico.jpg", "capturas/Retrabalhos/unidade 2/Curvados/2024/4- Abril/24 infinito.jpg"] },
            { data: "25/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Curvados/2024/4- Abril/25 pçs.jpeg", "capturas/Retrabalhos/unidade 2/Curvados/2024/4- Abril/25 grafico.jpeg", "capturas/Retrabalhos/unidade 2/Curvados/2024/4- Abril/25 infinito.jpeg"] },
            { data: "26/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Curvados/2024/4- Abril/26 pçs.jpeg", "capturas/Retrabalhos/unidade 2/Curvados/2024/4- Abril/26 grafico.jpeg", "capturas/Retrabalhos/unidade 2/Curvados/2024/4- Abril/26 infinito.jpeg"] },
            { data: "29/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Curvados/2024/4- Abril/29 pçs.jpeg", "capturas/Retrabalhos/unidade 2/Curvados/2024/4- Abril/29  grafico.jpeg", "capturas/Retrabalhos/unidade 2/Curvados/2024/4- Abril/29 infinito.jpeg"] },

            { data: "06/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Curvados/2024/5- Maio/6 pçs.jpeg", "capturas/Retrabalhos/unidade 2/Curvados/2024/5- Maio/6 grafico.jpeg", "capturas/Retrabalhos/unidade 2/Curvados/2024/5- Maio/6 infinito.jpeg"] },
            { data: "07/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Curvados/2024/5- Maio/7 pçs.jpeg", "capturas/Retrabalhos/unidade 2/Curvados/2024/5- Maio/7 grafico.jpeg", "capturas/Retrabalhos/unidade 2/Curvados/2024/5- Maio/7 infinito.jpeg"] },
            { data: "08/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Curvados/2024/5- Maio/8 pçs.jpeg", "capturas/Retrabalhos/unidade 2/Curvados/2024/5- Maio/8 grafico.jpeg", "capturas/Retrabalhos/unidade 2/Curvados/2024/5- Maio/8 infinito.jpeg"] },
            { data: "09/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Curvados/2024/5- Maio/9 pçs.jpeg", "capturas/Retrabalhos/unidade 2/Curvados/2024/5- Maio/9 grafico.jpeg", "capturas/Retrabalhos/unidade 2/Curvados/2024/5- Maio/9 infinito.jpeg"] },
            { data: "10/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Curvados/2024/5- Maio/10 pçs.jpg", "capturas/Retrabalhos/unidade 2/Curvados/2024/5- Maio/10 grafico.jpg", "capturas/Retrabalhos/unidade 2/Curvados/2024/5- Maio/10 infinito.jpg"] },
            { data: "13/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Curvados/2024/5- Maio/13 pçs.jpg", "capturas/Retrabalhos/unidade 2/Curvados/2024/5- Maio/13 grafico.jpg", "capturas/Retrabalhos/unidade 2/Curvados/2024/5- Maio/13 infinito.jpg"] },
            { data: "14/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Curvados/2024/5- Maio/14 pçs.jpg", "capturas/Retrabalhos/unidade 2/Curvados/2024/5- Maio/14 grafico.jpg", "capturas/Retrabalhos/unidade 2/Curvados/2024/5- Maio/14 infinito.jpg"] },
            { data: "16/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Curvados/2024/5- Maio/16 infinito.jpg", "capturas/Retrabalhos/unidade 2/Curvados/2024/5- Maio/16 grafico.jpg", "capturas/Retrabalhos/unidade 2/Curvados/2024/5- Maio/16 infinito.jpg"] },
            { data: "17/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Curvados/2024/5- Maio/17 pçs.jpg", "capturas/Retrabalhos/unidade 2/Curvados/2024/5- Maio/17 grafico.jpg", "capturas/Retrabalhos/unidade 2/Curvados/2024/5- Maio/17 infinito.jpg"] },
            { data: "20/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Curvados/2024/5- Maio/20 pçs.jpg", "capturas/Retrabalhos/unidade 2/Curvados/2024/5- Maio/20 grafico.jpg", "capturas/Retrabalhos/unidade 2/Curvados/2024/5- Maio/20 infinito.jpg"] },
            { data: "21/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Curvados/2024/5- Maio/21 pçs.jpg", "capturas/Retrabalhos/unidade 2/Curvados/2024/5- Maio/21 grafico.jpg", "capturas/Retrabalhos/unidade 2/Curvados/2024/5- Maio/21 infinito.jpg"] },
            { data: "23/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Curvados/2024/5- Maio/23 pçs.jpg", "capturas/Retrabalhos/unidade 2/Curvados/2024/5- Maio/23 grafico.jpg", "capturas/Retrabalhos/unidade 2/Curvados/2024/5- Maio/23 infinito.jpg"] },
            { data: "24/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Curvados/2024/5- Maio/24 1pt.jpg", "capturas/Retrabalhos/unidade 2/Curvados/2024/5- Maio/24 2pt.jpg", "capturas/Retrabalhos/unidade 2/Curvados/2024/5- Maio/24 g.jpg"] },
            { data: "27/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Curvados/2024/5- Maio/27 1pt.jpg", "capturas/Retrabalhos/unidade 2/Curvados/2024/5- Maio/27 2pt.jpg", "capturas/Retrabalhos/unidade 2/Curvados/2024/5- Maio/27 infinito.jpg"] },
            { data: "29/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Curvados/2024/5- Maio/29 1pt.jpg", "capturas/Retrabalhos/unidade 2/Curvados/2024/5- Maio/29 2pt.jpg", "capturas/Retrabalhos/unidade 2/Curvados/2024/5- Maio/29 g.jpg"] },
            { data: "30/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Curvados/2024/5- Maio/30 1pt.jpg", "capturas/Retrabalhos/unidade 2/Curvados/2024/5- Maio/30 2pt.jpg", "capturas/Retrabalhos/unidade 2/Curvados/2024/5- Maio/30 g.jpg"] },

            { data: "07/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 2/Curvados/7 1pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Curvados/7 2pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Curvados/7 3pt.jpg"] },
            { data: "11/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 2/Curvados/11 1pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Curvados/11 3pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Curvados/11 g.jpg"] },
            { data: "13/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 2/Curvados/13 1pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Curvados/13 2pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Curvados/13 g.jpg"] },
            { data: "14/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 2/Curvados/14 1pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Curvados/14 2pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Curvados/14 g.jpg"] },
            { data: "17/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 2/Curvados/17 1pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Curvados/17 2pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Curvados/17 g.jpg"] },
            { data: "18/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 2/Curvados/18 1pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Curvados/18 2pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Curvados/18 g.jpg"] },
            { data: "19/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 2/Curvados/19 1pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Curvados/19 2pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Curvados/19 g.jpg"] },
            { data: "20/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 2/Curvados/20 1pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Curvados/20 2pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Curvados/20 g.jpg"] },
            { data: "21/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 2/Curvados/21 1pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Curvados/21 2pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Curvados/21 g.jpg"] },
            { data: "28/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 2/Curvados/28 1pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Curvados/28 2pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Curvados/28 g.jpg"] },

            { data: "05/07/2024", captura: ["capturas/Retrabalhos/2024/7- Julho/Unidade 2/Curvados/05 1pt.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Curvados/05 2pt.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Curvados/5G.jpg"] },
            { data: "09/07/2024", captura: ["capturas/Retrabalhos/2024/7- Julho/Unidade 2/Curvados/09 1pt.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Curvados/09 2pt.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Curvados/9G.jpg"] },
            { data: "12/07/2024", captura: ["capturas/Retrabalhos/2024/7- Julho/Unidade 2/Curvados/12 1pt.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Curvados/12 2pt.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Curvados/12G.jpg"] },            
            { data: "19/07/2024", captura: ["capturas/Retrabalhos/2024/7- Julho/Unidade 2/Curvados/19 1pt.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Curvados/19 2pt.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Curvados/19 G.jpg"] },


            // { data: "", captura: ["", "", "", "", ""] },
            // { data: "", captura: ["", "", "", "", ""] },
        ],

        Estofaria: [
            { data: "25/11/2023", captura: ["capturas/Retrabalhos/unidade 2/Estofaria/11- Novembro/20-25.png"] },
            { data: "02/12/2023", captura: ["capturas/Retrabalhos/unidade 2/Estofaria/11- Novembro/27.png"] },

            { data: "09/12/2023", captura: ["capturas/Retrabalhos/unidade 2/Estofaria/12- Dezembro/SEMANA 04-12 À 09-12.png"] },

            { data: "16/12/2023", captura: ["capturas/Retrabalhos/unidade 2/Estofaria/12- Dezembro/SEMANA 11-12 À 15-12.png"] },

            { data: "20/12/2023", captura: ["capturas/Retrabalhos/unidade 2/Estofaria/12- Dezembro/SEMANA 18-12 À 20-12.png"] },

            { data: "12/01/2024", captura: ["capturas/Retrabalhos/unidade 2/Estofaria/2024/1- Janeiro/09-01 À 12-01.png"] },
            { data: "19/01/2024", captura: ["capturas/Retrabalhos/unidade 2/Estofaria/2024/1- Janeiro/15-01 À 19-01.png"] },
            { data: "26/01/2024", captura: ["capturas/Retrabalhos/unidade 2/Estofaria/2024/1- Janeiro/22-01 À 26-01.png"] },

            { data: "02/02/2024", captura: ["capturas/Retrabalhos/unidade 2/Estofaria/2024/2- Fevereiro/29-01 à 02-02.png"] },
            { data: "05/02/2024", captura: ["capturas/Retrabalhos/unidade 2/Estofaria/2024/2- Fevereiro/05-07.png"] },
            { data: "23/02/2024", captura: ["capturas/Retrabalhos/unidade 2/Estofaria/2024/2- Fevereiro/19-23.png"] },
            { data: "26/02/2024", captura: ["capturas/Retrabalhos/unidade 2/Estofaria/2024/3- Março/26-02.png"] },

            { data: "07/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Estofaria/2024/3- Março/7.png"] },
            { data: "08/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Estofaria/2024/3- Março/8.png"] },
            { data: "11/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Estofaria/2024/3- Março/11.png"] },
            { data: "13/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Estofaria/2024/3- Março/13.png"] },
            { data: "15/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Estofaria/2024/3- Março/15.jpg"] },
            { data: "18/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Estofaria/2024/3- Março/18-pt1.png", "capturas/Retrabalhos/unidade 2/Estofaria/2024/3- Março/18-pt2.png", "capturas/Retrabalhos/unidade 2/Estofaria/2024/3- Março/18-pt3.png"] },
            { data: "19/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Estofaria/2024/3- Março/19-pt1.png", "capturas/Retrabalhos/unidade 2/Estofaria/2024/3- Março/19-pt2.png", "capturas/Retrabalhos/unidade 2/Estofaria/2024/3- Março/19-pt3.png"] },
            { data: "20/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Estofaria/2024/3- Março/20 PÇS.jpg", "capturas/Retrabalhos/unidade 2/Estofaria/2024/3- Março/20 GRAFICO.jpg"] },
            { data: "21/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Estofaria/2024/3- Março/21-pt1.png", "capturas/Retrabalhos/unidade 2/Estofaria/2024/3- Março/21-pt2.png", "capturas/Retrabalhos/unidade 2/Estofaria/2024/3- Março/21-pt3.png", "capturas/Retrabalhos/unidade 2/Estofaria/2024/3- Março/21-G.jpeg"] },
            { data: "22/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Estofaria/2024/3- Março/22-pt1.png", "capturas/Retrabalhos/unidade 2/Estofaria/2024/3- Março/22-pt2.jpeg", "capturas/Retrabalhos/unidade 2/Estofaria/2024/3- Março/22-G.jpeg"] },
            { data: "25/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Estofaria/2024/3- Março/25-pt1.png", "capturas/Retrabalhos/unidade 2/Estofaria/2024/3- Março/25-pt2.jpeg", "capturas/Retrabalhos/unidade 2/Estofaria/2024/3- Março/25-G.jpeg"] },
            { data: "26/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Estofaria/2024/3- Março/26-pt1.png", "capturas/Retrabalhos/unidade 2/Estofaria/2024/3- Março/26-pt2.jpeg", "capturas/Retrabalhos/unidade 2/Estofaria/2024/3- Março/26-G.jpeg"] },
            { data: "27/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Estofaria/2024/3- Março/27 PÇS.jpg", "capturas/Retrabalhos/unidade 2/Estofaria/2024/3- Março/27 INFINITO.jpg", "capturas/Retrabalhos/unidade 2/Estofaria/2024/3- Março/INFINITO.jpg"] },
            { data: "28/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Estofaria/2024/3- Março/28 PÇS.jpg", "capturas/Retrabalhos/unidade 2/Estofaria/2024/3- Março/28 GRAFICO.jpg", "capturas/Retrabalhos/unidade 2/Estofaria/2024/3- Março/28 INFINITO.jpg"] },

            { data: "01/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Estofaria/2024/4- Abril/01 pçs.jpg", "capturas/Retrabalhos/unidade 2/Estofaria/2024/4- Abril/01 grafico.jpg", "capturas/Retrabalhos/unidade 2/Estofaria/2024/4- Abril/01 infinito.jpg"] },
            { data: "02/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Estofaria/2024/4- Abril/02 pçs.png", "capturas/Retrabalhos/unidade 2/Estofaria/2024/4- Abril/02 grafico.png", "capturas/Retrabalhos/unidade 2/Estofaria/2024/4- Abril/02 infinito.png"] },
            { data: "03/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Estofaria/2024/4- Abril/03 pçs.jpg", "capturas/Retrabalhos/unidade 2/Estofaria/2024/4- Abril/03 grafico.jpg", "capturas/Retrabalhos/unidade 2/Estofaria/2024/4- Abril/03 infinito.jpg"] },
            { data: "04/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Estofaria/2024/4- Abril/04 pçs.jpg", "capturas/Retrabalhos/unidade 2/Estofaria/2024/4- Abril/04 grafico.jpg", "capturas/Retrabalhos/unidade 2/Estofaria/2024/4- Abril/04 infinito.jpg"] },
            { data: "05/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Estofaria/2024/4- Abril/05 pçs.jpg", "capturas/Retrabalhos/unidade 2/Estofaria/2024/4- Abril/05 grafico.jpg", "capturas/Retrabalhos/unidade 2/Estofaria/2024/4- Abril/05 infinito.jpg"] },
            { data: "08/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Estofaria/2024/4- Abril/08 pçs.jpg", "capturas/Retrabalhos/unidade 2/Estofaria/2024/4- Abril/08 grafico.jpg", "capturas/Retrabalhos/unidade 2/Estofaria/2024/4- Abril/08 infinito.jpg"] },
            { data: "09/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Estofaria/2024/4- Abril/09 pçs.jpg", "capturas/Retrabalhos/unidade 2/Estofaria/2024/4- Abril/09 grafico.jpg", "capturas/Retrabalhos/unidade 2/Estofaria/2024/4- Abril/09 infinito.jpg"] },
            { data: "10/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Estofaria/2024/4- Abril/10 pçs.jpg", "capturas/Retrabalhos/unidade 2/Estofaria/2024/4- Abril/10 grafico.jpg", "capturas/Retrabalhos/unidade 2/Estofaria/2024/4- Abril/10 infinito.jpg"] },
            { data: "12/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Estofaria/2024/4- Abril/12 pçs.jpg", "capturas/Retrabalhos/unidade 2/Estofaria/2024/4- Abril/12 grafico.jpg", "capturas/Retrabalhos/unidade 2/Estofaria/2024/4- Abril/12 infinito.jpg"] },
            { data: "16/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Estofaria/2024/4- Abril/16 pçs.jpg", "capturas/Retrabalhos/unidade 2/Estofaria/2024/4- Abril/16 grafico.jpg", "capturas/Retrabalhos/unidade 2/Estofaria/2024/4- Abril/16 infinito.jpg"] },
            { data: "19/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Estofaria/2024/4- Abril/19 pçs.jpg", "capturas/Retrabalhos/unidade 2/Estofaria/2024/4- Abril/19 grafico.jpg", "capturas/Retrabalhos/unidade 2/Estofaria/2024/4- Abril/19 infinito.jpg"] },
            { data: "24/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Estofaria/2024/4- Abril/24 pçs.jpg", "capturas/Retrabalhos/unidade 2/Estofaria/2024/4- Abril/24 grafico.jpg", "capturas/Retrabalhos/unidade 2/Estofaria/2024/4- Abril/24 infinito.jpg"] },
            { data: "25/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Estofaria/2024/4- Abril/25 pçs.jpeg", "capturas/Retrabalhos/unidade 2/Estofaria/2024/4- Abril/25 grafico.jpeg", "capturas/Retrabalhos/unidade 2/Estofaria/2024/4- Abril/25 infinito.jpeg"] },
            { data: "26/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Estofaria/2024/4- Abril/26 pçs.jpeg", "capturas/Retrabalhos/unidade 2/Estofaria/2024/4- Abril/26 grafico.jpeg", "capturas/Retrabalhos/unidade 2/Estofaria/2024/4- Abril/26 infinito.jpeg"] },
            { data: "29/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Estofaria/2024/4- Abril/29 pçs.jpeg", "capturas/Retrabalhos/unidade 2/Estofaria/2024/4- Abril/29 grafico.jpeg", "capturas/Retrabalhos/unidade 2/Estofaria/2024/4- Abril/29 infinito.jpeg"] },

            { data: "06/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Estofaria/2024/5- Maio/6 pçs.jpeg", "capturas/Retrabalhos/unidade 2/Estofaria/2024/5- Maio/6 grafico.jpeg", "capturas/Retrabalhos/unidade 2/Estofaria/2024/5- Maio/6 ifinito.jpeg"] },
            { data: "07/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Estofaria/2024/5- Maio/7 pçs.jpeg", "capturas/Retrabalhos/unidade 2/Estofaria/2024/5- Maio/7 grafico.jpeg", "capturas/Retrabalhos/unidade 2/Estofaria/2024/5- Maio/7 ifinito.jpeg"] },
            { data: "08/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Estofaria/2024/5- Maio/8 pçs.jpeg", "capturas/Retrabalhos/unidade 2/Estofaria/2024/5- Maio/8 grafico.jpeg", "capturas/Retrabalhos/unidade 2/Estofaria/2024/5- Maio/8 ifinito.jpeg"] },
            { data: "09/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Estofaria/2024/5- Maio/9 pçs.jpeg", "capturas/Retrabalhos/unidade 2/Estofaria/2024/5- Maio/9 grafico.jpeg", "capturas/Retrabalhos/unidade 2/Estofaria/2024/5- Maio/9 infinito.jpeg"] },
            { data: "10/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Estofaria/2024/5- Maio/10 pçs.jpg", "capturas/Retrabalhos/unidade 2/Estofaria/2024/5- Maio/10 grafico.jpg", "capturas/Retrabalhos/unidade 2/Estofaria/2024/5- Maio/10 infinito.jpg"] },
            { data: "16/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Estofaria/2024/5- Maio/16 pçs.jpg", "capturas/Retrabalhos/unidade 2/Estofaria/2024/5- Maio/16 grafico.jpg", "capturas/Retrabalhos/unidade 2/Estofaria/2024/5- Maio/16 infinito.jpg"] },
            { data: "17/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Estofaria/2024/5- Maio/17 pçs.jpg", "capturas/Retrabalhos/unidade 2/Estofaria/2024/5- Maio/17 grafico.jpg", "capturas/Retrabalhos/unidade 2/Estofaria/2024/5- Maio/17 infinito.jpg"] },
            { data: "20/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Estofaria/2024/5- Maio/20 pçs.jpg", "capturas/Retrabalhos/unidade 2/Estofaria/2024/5- Maio/20 grafico.jpg", "capturas/Retrabalhos/unidade 2/Estofaria/2024/5- Maio/20 infinito.jpg"] },
            { data: "21/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Estofaria/2024/5- Maio/21 pçs.jpg", "capturas/Retrabalhos/unidade 2/Estofaria/2024/5- Maio/21 grafico.jpg", "capturas/Retrabalhos/unidade 2/Estofaria/2024/5- Maio/21 infinito.jpg"] },
            { data: "23/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Estofaria/2024/5- Maio/23 pçs.jpg", "capturas/Retrabalhos/unidade 2/Estofaria/2024/5- Maio/23 grafico.jpg", "capturas/Retrabalhos/unidade 2/Estofaria/2024/5- Maio/23 infinito.jpg"] },
            { data: "24/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Estofaria/2024/5- Maio/25 1PT.jpg", "capturas/Retrabalhos/unidade 2/Estofaria/2024/5- Maio/25 2PT.jpg", "capturas/Retrabalhos/unidade 2/Estofaria/2024/5- Maio/25 g.jpg"] },
            { data: "29/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Estofaria/2024/5- Maio/29 1PT.jpg", "capturas/Retrabalhos/unidade 2/Estofaria/2024/5- Maio/29 2PT.jpg", "capturas/Retrabalhos/unidade 2/Estofaria/2024/5- Maio/29 g.jpg"] },
            { data: "30/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Estofaria/2024/5- Maio/30 1PT.jpg", "capturas/Retrabalhos/unidade 2/Estofaria/2024/5- Maio/30 2PT.jpg", "capturas/Retrabalhos/unidade 2/Estofaria/2024/5- Maio/30 g.jpg"] },

            { data: "07/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 2/Estofaria/7 1pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Estofaria/7 2pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Estofaria/7G.jpg"] },
            { data: "11/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 2/Estofaria/11 1pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Estofaria/11 2pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Estofaria/11 G.jpg"] },
            { data: "13/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 2/Estofaria/13 1pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Estofaria/13 2pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Estofaria/13 G.jpg"] },
            { data: "14/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 2/Estofaria/15 1pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Estofaria/15 2pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Estofaria/15 g.jpg"] },
            { data: "17/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 2/Estofaria/17 1pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Estofaria/17 2pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Estofaria/17 g.jpg"] },
            { data: "18/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 2/Estofaria/18 1pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Estofaria/18 2pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Estofaria/18 g.jpg"] },
            { data: "19/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 2/Estofaria/19 1pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Estofaria/19 2pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Estofaria/19 G.jpg"] },
            { data: "20/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 2/Estofaria/20 1pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Estofaria/20 2pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Estofaria/20 G.jpg"] },
            { data: "21/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 2/Estofaria/21 1pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Estofaria/21 2pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Estofaria/21 G.jpg"] },
            { data: "28/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 2/Estofaria/28 1pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Estofaria/28 2pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Estofaria/28 G.jpg"] },

            { data: "05/07/2024", captura: ["capturas/Retrabalhos/2024/7- Julho/Unidade 2/Estofaria/5 1pt.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Estofaria/5 2pt.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Estofaria/5G.jpg"] },
            { data: "09/07/2024", captura: ["capturas/Retrabalhos/2024/7- Julho/Unidade 2/Estofaria/9 1pt.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Estofaria/9 2pt.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Estofaria/9G.jpg"] },
            { data: "12/07/2024", captura: ["capturas/Retrabalhos/2024/7- Julho/Unidade 2/Estofaria/12 1pt.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Estofaria/12 2pt.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Estofaria/12 G.jpg"] },
            { data: "19/07/2024", captura: ["capturas/Retrabalhos/2024/7- Julho/Unidade 2/Estofaria/19 1pt.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Estofaria/19 2pt.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Estofaria/19 G.jpg"] },


            // { data: "", captura: ["", "", "", "", ""] },
            // { data: "", captura: ["", "", "", "", ""] },
        ],

        exp2: [
            { data: "25/11/2023", captura: ["capturas/Retrabalhos/unidade 2/Expedição/11- Novembro/27-02.png"] },
            { data: "02/12/2023", captura: ["capturas/Retrabalhos/unidade 2/Expedição/11- Novembro/27.png", "capturas/Retrabalhos/unidade 2/Expedição/11- Novembro/27 GRAFICO.png"] },

            { data: "09/12/2023", captura: ["capturas/Retrabalhos/unidade 2/Expedição/12- Dezembro/SEMANA 04-12 À 09-12.png", "capturas/Retrabalhos/unidade 2/Expedição/12- Dezembro/SEMANA 04-12 À 09-12 GRÁFICO.png"] },
            
            { data: "16/12/2023", captura: ["capturas/Retrabalhos/unidade 2/Expedição/12- Dezembro/SEMANA 11-12 À 15-12.png", "capturas/Retrabalhos/unidade 2/Expedição/12- Dezembro/SEMANA 11-12 À 15-12 GRAFICO.png"] },

            { data: "20/12/2023", captura: ["capturas/Retrabalhos/unidade 2/Expedição/12- Dezembro/SEMANA 18-12 À 20-12.png"] },

            { data: "12/01/2024", captura: ["capturas/Retrabalhos/unidade 2/Expedição/2024/1- Janeiro/9-12.png", "capturas/Retrabalhos/unidade 2/Expedição/2024/1- Janeiro/09-01 À 12-01 GRÁFICO.png"] },
            { data: "19/01/2024", captura: ["capturas/Retrabalhos/unidade 2/Expedição/2024/1- Janeiro/15-01 À 19-01.png", "capturas/Retrabalhos/unidade 2/Expedição/2024/1- Janeiro/15-01 À 19-01 GRÁFICO.png"] },
            { data: "26/01/2024", captura: ["capturas/Retrabalhos/unidade 2/Expedição/2024/1- Janeiro/22-01 À 26-01.png", "capturas/Retrabalhos/unidade 2/Expedição/2024/1- Janeiro/22-01 À 26-01 GRÁFICO.png"] },

            { data: "02/02/2024", captura: ["capturas/Retrabalhos/unidade 2/Expedição/2024/2- Fevereiro/01-29 pçs.png", "capturas/Retrabalhos/unidade 2/Expedição/2024/2- Fevereiro/01-29.png", "capturas/Retrabalhos/unidade 2/Expedição/2024/2- Fevereiro/grafico 02 29.png"] },
            { data: "05/02/2024", captura: ["capturas/Retrabalhos/unidade 2/Expedição/2024/2- Fevereiro/05-07 pçs.png", "capturas/Retrabalhos/unidade 2/Expedição/2024/2- Fevereiro/05-07.png", "capturas/Retrabalhos/unidade 2/Expedição/2024/2- Fevereiro/grafico  05-07.png"] },
            { data: "23/02/2024", captura: ["capturas/Retrabalhos/unidade 2/Expedição/2024/2- Fevereiro/19-23 pçs.png", "capturas/Retrabalhos/unidade 2/Expedição/2024/2- Fevereiro/19-23.png", "capturas/Retrabalhos/unidade 2/Expedição/2024/2- Fevereiro/grafico 19-23.png"] },
            { data: "26/02/2024", captura: ["capturas/Retrabalhos/unidade 2/Expedição/2024/3- Março/26 PÇS.png", "capturas/Retrabalhos/unidade 2/Expedição/2024/3- Março/26-02 GRAFICO.png", "capturas/Retrabalhos/unidade 2/Expedição/2024/3- Março/26 GRAFICO INFINITO.png"] },

            { data: "07/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Expedição/2024/3- Março/07-PÇS.png", "capturas/Retrabalhos/unidade 2/Expedição/2024/3- Março/07 GRAFICO.png"] },
            { data: "08/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Expedição/2024/3- Março/8PÇS.png", "capturas/Retrabalhos/unidade 2/Expedição/2024/3- Março/8 GRAFICO.png", "capturas/Retrabalhos/unidade 2/Expedição/2024/3- Março/8 GRAFICO INFINITO.png"] },
            { data: "11/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Expedição/2024/3- Março/11-PÇS.png", "capturas/Retrabalhos/unidade 2/Expedição/2024/3- Março/11 GRAFICO.png"] },
            { data: "12/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Expedição/2024/3- Março/12.png"] },
            { data: "13/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Expedição/2024/3- Março/13 PÇS.png", "capturas/Retrabalhos/unidade 2/Expedição/2024/3- Março/13 GRAFICO.png"] },
            { data: "15/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Expedição/2024/3- Março/15 PÇS.jpg", "capturas/Retrabalhos/unidade 2/Expedição/2024/3- Março/15 GRAFICO.jpg", "capturas/Retrabalhos/unidade 2/Expedição/2024/3- Março/15 G.INFINITO.jpg"] },
            { data: "18/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Expedição/2024/3- Março/18-pt1.png", "capturas/Retrabalhos/unidade 2/Expedição/2024/3- Março/18-pt2.png", "capturas/Retrabalhos/unidade 2/Expedição/2024/3- Março/18-pt3.png", "capturas/Retrabalhos/unidade 2/Expedição/2024/3- Março/18-G.png"] },
            { data: "19/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Expedição/2024/3- Março/19-pt1.png", "capturas/Retrabalhos/unidade 2/Expedição/2024/3- Março/19-pt2.png", "capturas/Retrabalhos/unidade 2/Expedição/2024/3- Março/19-pt3.png", "capturas/Retrabalhos/unidade 2/Expedição/2024/3- Março/19-G.png"] },
            { data: "20/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Expedição/2024/3- Março/20 PÇS.jpg", "capturas/Retrabalhos/unidade 2/Expedição/2024/3- Março/20 GRAFICO.jpg", "capturas/Retrabalhos/unidade 2/Expedição/2024/3- Março/20 G.INFINITO.jpg"] },
            { data: "21/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Expedição/2024/3- Março/21-pt1.jpeg", "capturas/Retrabalhos/unidade 2/Expedição/2024/3- Março/21-pt2.jpeg", "capturas/Retrabalhos/unidade 2/Expedição/2024/3- Março/21-pt3.jpeg", "capturas/Retrabalhos/unidade 2/Expedição/2024/3- Março/21-G.jpeg"] },
            { data: "22/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Expedição/2024/3- Março/22-pt1.jpeg", "capturas/Retrabalhos/unidade 2/Expedição/2024/3- Março/22-pt2.png", "capturas/Retrabalhos/unidade 2/Expedição/2024/3- Março/22-pt3.png", "capturas/Retrabalhos/unidade 2/Expedição/2024/3- Março/22-G.png"] },
            { data: "25/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Expedição/2024/3- Março/25-pt1.png", "capturas/Retrabalhos/unidade 2/Expedição/2024/3- Março/25-pt2.jpeg", "capturas/Retrabalhos/unidade 2/Expedição/2024/3- Março/25-G.jpeg"] },
            { data: "26/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Expedição/2024/3- Março/26-pt1.jpeg", "capturas/Retrabalhos/unidade 2/Expedição/2024/3- Março/26-pt2.jpeg", "capturas/Retrabalhos/unidade 2/Expedição/2024/3- Março/26-G.jpeg"] },
            { data: "27/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Expedição/2024/3- Março/27 PÇS.jpg", "capturas/Retrabalhos/unidade 2/Expedição/2024/3- Março/27 GRAFICO.jpg", "capturas/Retrabalhos/unidade 2/Expedição/2024/3- Março/27 G.INFINITO.jpg"] },
            { data: "28/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Expedição/2024/3- Março/28 PÇS.jpg", "capturas/Retrabalhos/unidade 2/Expedição/2024/3- Março/28 GRAFICO.jpg", "capturas/Retrabalhos/unidade 2/Expedição/2024/3- Março/28 G.INFINITO.jpg"] },

            { data: "01/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Expedição/2024/4- Abril/01 pçs.jpg", "capturas/Retrabalhos/unidade 2/Expedição/2024/4- Abril/01 grafico.jpg", "capturas/Retrabalhos/unidade 2/Expedição/2024/4- Abril/01 infinito.jpg"] },
            { data: "02/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Expedição/2024/4- Abril/02 pçs.png", "capturas/Retrabalhos/unidade 2/Expedição/2024/4- Abril/02 grafico.png", "capturas/Retrabalhos/unidade 2/Expedição/2024/4- Abril/02 infinito.png"] },
            { data: "03/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Expedição/2024/4- Abril/03 pçs.jpg", "capturas/Retrabalhos/unidade 2/Expedição/2024/4- Abril/03 grafico.jpg", "capturas/Retrabalhos/unidade 2/Expedição/2024/4- Abril/03 infinito.jpg"] },
            { data: "04/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Expedição/2024/4- Abril/04 pçs.jpg", "capturas/Retrabalhos/unidade 2/Expedição/2024/4- Abril/04 grafico.jpg", "capturas/Retrabalhos/unidade 2/Expedição/2024/4- Abril/04 infinito.jpg"] },
            { data: "05/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Expedição/2024/4- Abril/05 pçs.jpg", "capturas/Retrabalhos/unidade 2/Expedição/2024/4- Abril/05 grafico.jpg", "capturas/Retrabalhos/unidade 2/Expedição/2024/4- Abril/05 infinito.jpg"] },
            { data: "08/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Expedição/2024/4- Abril/08 pçs.jpg", "capturas/Retrabalhos/unidade 2/Expedição/2024/4- Abril/08 grafico.jpg", "capturas/Retrabalhos/unidade 2/Expedição/2024/4- Abril/08 infinito.jpg"] },
            { data: "09/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Expedição/2024/4- Abril/09 pçs.jpg", "capturas/Retrabalhos/unidade 2/Expedição/2024/4- Abril/09 grafico.jpg", "capturas/Retrabalhos/unidade 2/Expedição/2024/4- Abril/09 infinito.jpg"] },
            { data: "10/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Expedição/2024/4- Abril/10 pçs.jpg", "capturas/Retrabalhos/unidade 2/Expedição/2024/4- Abril/10  infinito.jpg", "capturas/Retrabalhos/unidade 2/Expedição/2024/4- Abril/10 grafico.jpg"] },
            { data: "12/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Expedição/2024/4- Abril/12 pçs.jpg", "capturas/Retrabalhos/unidade 2/Expedição/2024/4- Abril/12 grafico.jpg", "capturas/Retrabalhos/unidade 2/Expedição/2024/4- Abril/12 infinito.jpg"] },
            { data: "16/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Expedição/2024/4- Abril/16 pçs.jpg", "capturas/Retrabalhos/unidade 2/Expedição/2024/4- Abril/16 grafico.jpg", "capturas/Retrabalhos/unidade 2/Expedição/2024/4- Abril/16 infinito.jpg"] },
            { data: "19/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Expedição/2024/4- Abril/19 pçs.jpg", "capturas/Retrabalhos/unidade 2/Expedição/2024/4- Abril/19 grafico.jpg", "capturas/Retrabalhos/unidade 2/Expedição/2024/4- Abril/19 infinito.jpg"] },
            { data: "24/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Expedição/2024/4- Abril/24 pçs.jpg", "capturas/Retrabalhos/unidade 2/Expedição/2024/4- Abril/24 grafico.jpg", "capturas/Retrabalhos/unidade 2/Expedição/2024/4- Abril/24 infinito.jpg"] },
            { data: "25/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Expedição/2024/4- Abril/25 pçs.jpeg", "capturas/Retrabalhos/unidade 2/Expedição/2024/4- Abril/25 grafico.jpeg", "capturas/Retrabalhos/unidade 2/Expedição/2024/4- Abril/25 infinito.jpeg"] },
            { data: "26/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Expedição/2024/4- Abril/26 pçs.jpeg", "capturas/Retrabalhos/unidade 2/Expedição/2024/4- Abril/26 grafico.jpeg", "capturas/Retrabalhos/unidade 2/Expedição/2024/4- Abril/26 infinito.jpeg"] },
            { data: "29/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Expedição/2024/4- Abril/29 pçs.jpeg", "capturas/Retrabalhos/unidade 2/Expedição/2024/4- Abril/29 grafico.jpeg", "capturas/Retrabalhos/unidade 2/Expedição/2024/4- Abril/29 infinito.jpeg"] },

            { data: "06/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Expedição/2024/5- Maio/6 pçs.jpeg", "capturas/Retrabalhos/unidade 2/Expedição/2024/5- Maio/6 grafico.jpeg", "capturas/Retrabalhos/unidade 2/Expedição/2024/5- Maio/6- infinito.jpeg"] },
            { data: "07/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Expedição/2024/5- Maio/7 pçs.jpeg", "capturas/Retrabalhos/unidade 2/Expedição/2024/5- Maio/7 grafico.jpeg", "capturas/Retrabalhos/unidade 2/Expedição/2024/5- Maio/7  infinito.jpeg"] },
            { data: "08/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Expedição/2024/5- Maio/8 pçs.jpeg", "capturas/Retrabalhos/unidade 2/Expedição/2024/5- Maio/8 grafico.jpeg", "capturas/Retrabalhos/unidade 2/Expedição/2024/5- Maio/8  infinito.jpeg"] },
            { data: "09/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Expedição/2024/5- Maio/9 pçs.jpeg", "capturas/Retrabalhos/unidade 2/Expedição/2024/5- Maio/9 grafico.jpeg", "capturas/Retrabalhos/unidade 2/Expedição/2024/5- Maio/9  infinito.jpeg"] },
            { data: "10/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Expedição/2024/5- Maio/10 pçs.jpg", "capturas/Retrabalhos/unidade 2/Expedição/2024/5- Maio/10 grafico.jpg", "capturas/Retrabalhos/unidade 2/Expedição/2024/5- Maio/10 infinito.jpg"] },
            { data: "13/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Expedição/2024/5- Maio/13 pçs.jpg", "capturas/Retrabalhos/unidade 2/Expedição/2024/5- Maio/13  grafico.jpg", "capturas/Retrabalhos/unidade 2/Expedição/2024/5- Maio/13 infinito.jpg"] },
            { data: "14/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Expedição/2024/5- Maio/14 pçs.jpg", "capturas/Retrabalhos/unidade 2/Expedição/2024/5- Maio/14 grafico.jpg", "capturas/Retrabalhos/unidade 2/Expedição/2024/5- Maio/14  infinito.jpg"] },
            { data: "16/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Expedição/2024/5- Maio/16 pçs.jpg", "capturas/Retrabalhos/unidade 2/Expedição/2024/5- Maio/16 grafico.jpg", "capturas/Retrabalhos/unidade 2/Expedição/2024/5- Maio/16 infinito.jpg"] },
            { data: "17/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Expedição/2024/5- Maio/17 pçs.jpg", "capturas/Retrabalhos/unidade 2/Expedição/2024/5- Maio/17 grafico.jpg", "capturas/Retrabalhos/unidade 2/Expedição/2024/5- Maio/17 infinito.jpg"] },
            { data: "20/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Expedição/2024/5- Maio/20 pçs.jpg", "capturas/Retrabalhos/unidade 2/Expedição/2024/5- Maio/20 grafico.jpg", "capturas/Retrabalhos/unidade 2/Expedição/2024/5- Maio/20 infinito.jpg"] },
            { data: "21/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Expedição/2024/5- Maio/21 pçs.jpg", "capturas/Retrabalhos/unidade 2/Expedição/2024/5- Maio/21 grafico.jpg", "capturas/Retrabalhos/unidade 2/Expedição/2024/5- Maio/21 infinito.jpg"] },
            { data: "23/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Expedição/2024/5- Maio/23 pçs.jpg", "capturas/Retrabalhos/unidade 2/Expedição/2024/5- Maio/23 grafico.jpg", "capturas/Retrabalhos/unidade 2/Expedição/2024/5- Maio/23 infinito.jpg"] },
            { data: "24/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Expedição/2024/5- Maio/25 1pt.jpg", "capturas/Retrabalhos/unidade 2/Expedição/2024/5- Maio/25 2pt.jpg", "capturas/Retrabalhos/unidade 2/Expedição/2024/5- Maio/25 g.jpg"] },
            { data: "27/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Expedição/2024/5- Maio/27 1pt.jpg", "capturas/Retrabalhos/unidade 2/Expedição/2024/5- Maio/27 2pt.jpg", "capturas/Retrabalhos/unidade 2/Expedição/2024/5- Maio/27 infinito.jpg"] },
            { data: "29/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Expedição/2024/5- Maio/29 1pt.jpg", "capturas/Retrabalhos/unidade 2/Expedição/2024/5- Maio/29 2pt.jpg", "capturas/Retrabalhos/unidade 2/Expedição/2024/5- Maio/29 g.jpg"] },
            { data: "30/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Expedição/2024/5- Maio/30 1pt.jpg", "capturas/Retrabalhos/unidade 2/Expedição/2024/5- Maio/30 2pt.jpg", "capturas/Retrabalhos/unidade 2/Expedição/2024/5- Maio/30 g.jpg"] },

            { data: "07/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 2/Expedição/7 1pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Expedição/7 2pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Expedição/7 g.jpg"] },
            { data: "11/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 2/Expedição/11 1pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Expedição/11 2pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Expedição/11 g.jpg"] },
            { data: "13/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 2/Expedição/13 1pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Expedição/13 2pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Expedição/13 G.jpg"] },
            { data: "14/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 2/Expedição/14 1pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Expedição/14 2pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Expedição/14 G.jpg"] },
            { data: "17/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 2/Expedição/17 1pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Expedição/17 2pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Expedição/17 g.jpg"] },
            { data: "18/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 2/Expedição/18 1pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Expedição/18 2pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Expedição/18 g.jpg"] },
            { data: "19/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 2/Expedição/19 1pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Expedição/19 2pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Expedição/19 g.jpg"] },
            { data: "20/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 2/Expedição/20 1pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Expedição/20 g.jpg"] },
            { data: "21/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 2/Expedição/21 1pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Expedição/21 2pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Expedição/21 G.jpg"] },
            { data: "28/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 2/Expedição/28 1pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Expedição/28 2pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Expedição/28 G.jpg"] },

            { data: "05/07/2024", captura: ["capturas/Retrabalhos/2024/7- Julho/Unidade 2/Expedição/05 1pt.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Expedição/05 2pt.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Expedição/05 G.jpg"] },
            { data: "09/07/2024", captura: ["capturas/Retrabalhos/2024/7- Julho/Unidade 2/Expedição/09 1pt.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Expedição/09 2pt.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Expedição/09 G.jpg"] },
            { data: "12/07/2024", captura: ["capturas/Retrabalhos/2024/7- Julho/Unidade 2/Expedição/12 1pt.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Expedição/12 2pt.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Expedição/12 G.jpg"] },
            { data: "19/07/2024", captura: ["capturas/Retrabalhos/2024/7- Julho/Unidade 2/Expedição/19 1pt.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Expedição/19 2pt.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Expedição/19 G.jpg"] },


            // { data: "", captura: ["", "", ""] },
            // { data: "", captura: ["", "", ""] },
        ],

        Mont_Osso: [
            { data: "02/12/2023", captura: ["capturas/Retrabalhos/unidade 2/Osso/11- Novembro/27.png"] },

            { data: "09/12/2023", captura: ["capturas/Retrabalhos/unidade 2/Osso/12-Dezembro/semana 04-12 à 09-12.png"] },

            { data: "16/12/2023", captura: ["capturas/Retrabalhos/unidade 2/Osso/12-Dezembro/11-12 À 15-12.png"] },

            { data: "20/12/2023", captura: ["capturas/Retrabalhos/unidade 2/Osso/12-Dezembro/18-12 À 20-12.png"] },

            { data: "12/01/2024", captura: ["capturas/Retrabalhos/unidade 2/Osso/2024/1- Janeiro/09-01 Á 12-01.png"] },
            { data: "26/01/2024", captura: ["capturas/Retrabalhos/unidade 2/Osso/2024/1- Janeiro/22-01 Á 26-01.png"] },
            
            { data: "02/02/2024", captura: ["capturas/Retrabalhos/unidade 2/Osso/2024/2- Fevereiro/29-01 À 02-02.png"] },
            { data: "05/02/2024", captura: ["capturas/Retrabalhos/unidade 2/Osso/2024/2- Fevereiro/05-07.png"] },
            { data: "23/02/2024", captura: ["capturas/Retrabalhos/unidade 2/Osso/2024/2- Fevereiro/19-23.png"] },
            { data: "26/02/2024", captura: ["capturas/Retrabalhos/unidade 2/Osso/2024/3- Março/26-02.png"] },

            { data: "08/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Osso/2024/3- Março/8.png"] },
            { data: "11/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Osso/2024/3- Março/11.png"] },
            { data: "12/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Osso/2024/3- Março/12.png"] },
            { data: "13/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Osso/2024/3- Março/13.png"] },
            { data: "15/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Osso/2024/3- Março/15.jpg"] },
            { data: "18/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Osso/2024/3- Março/18-pt1.png", "capturas/Retrabalhos/unidade 2/Osso/2024/3- Março/18-pt2.png", "capturas/Retrabalhos/unidade 2/Osso/2024/3- Março/18-pt3.png"] },
            { data: "19/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Osso/2024/3- Março/19-pt1.png", "capturas/Retrabalhos/unidade 2/Osso/2024/3- Março/19-pt2.png"] },
            { data: "20/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Osso/2024/3- Março/20 PÇS.jpg", "capturas/Retrabalhos/unidade 2/Osso/2024/3- Março/20 GRAFICO.jpg", "capturas/Retrabalhos/unidade 2/Osso/2024/3- Março/20 INFINITO.jpg"] },
            { data: "21/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Osso/2024/3- Março/21-pt1.png", "capturas/Retrabalhos/unidade 2/Osso/2024/3- Março/21-pt2.png", "capturas/Retrabalhos/unidade 2/Osso/2024/3- Março/21-G.jpeg"] },
            { data: "22/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Osso/2024/3- Março/22-pt1.png", "capturas/Retrabalhos/unidade 2/Osso/2024/3- Março/22-pt2.jpeg", "capturas/Retrabalhos/unidade 2/Osso/2024/3- Março/22-G.jpeg"] },
            { data: "25/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Osso/2024/3- Março/25-pt1.png", "capturas/Retrabalhos/unidade 2/Osso/2024/3- Março/25-pt2.jpeg", "capturas/Retrabalhos/unidade 2/Osso/2024/3- Março/25-G.jpeg"] },
            { data: "26/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Osso/2024/3- Março/26-pt1.png", "capturas/Retrabalhos/unidade 2/Osso/2024/3- Março/26-pt2.jpeg", "capturas/Retrabalhos/unidade 2/Osso/2024/3- Março/26-G.jpeg"] },
            { data: "27/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Osso/2024/3- Março/27 PÇS.jpg", "capturas/Retrabalhos/unidade 2/Osso/2024/3- Março/27 INFINITO.jpg", "capturas/Retrabalhos/unidade 2/Osso/2024/3- Março/27 GRAFICO.jpg"] },
            { data: "28/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Osso/2024/3- Março/28 PÇS.jpg", "capturas/Retrabalhos/unidade 2/Osso/2024/3- Março/28 GRAFICO.jpg", "capturas/Retrabalhos/unidade 2/Osso/2024/3- Março/28 INFINITO.jpg"] },

            { data: "01/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Osso/2024/4- Abril/01 pçs.jpg", "capturas/Retrabalhos/unidade 2/Osso/2024/4- Abril/01 grafico.jpg", "capturas/Retrabalhos/unidade 2/Osso/2024/4- Abril/01 infinito.jpg"] },
            { data: "02/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Osso/2024/4- Abril/02  pçs.png", "capturas/Retrabalhos/unidade 2/Osso/2024/4- Abril/02 grafico.png", "capturas/Retrabalhos/unidade 2/Osso/2024/4- Abril/02 infinito.png"] },
            { data: "03/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Osso/2024/4- Abril/03 pçs.jpg", "capturas/Retrabalhos/unidade 2/Osso/2024/4- Abril/03 grafico.jpg", "capturas/Retrabalhos/unidade 2/Osso/2024/4- Abril/03 infinito.jpg"] },
            { data: "04/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Osso/2024/4- Abril/04 pçs.jpg", "capturas/Retrabalhos/unidade 2/Osso/2024/4- Abril/04 grafico.jpg", "capturas/Retrabalhos/unidade 2/Osso/2024/4- Abril/04 infinito.jpg"] },
            { data: "05/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Osso/2024/4- Abril/05 pçs.jpg", "capturas/Retrabalhos/unidade 2/Osso/2024/4- Abril/05 grafico.jpg", "capturas/Retrabalhos/unidade 2/Osso/2024/4- Abril/05 infinito.jpg"] },
            { data: "08/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Osso/2024/4- Abril/08 pçs.jpg", "capturas/Retrabalhos/unidade 2/Osso/2024/4- Abril/08 grafico.jpg", "capturas/Retrabalhos/unidade 2/Osso/2024/4- Abril/08 infinito.jpg"] },
            { data: "09/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Osso/2024/4- Abril/09 pçs.jpg", "capturas/Retrabalhos/unidade 2/Osso/2024/4- Abril/09 grafico.jpg", "capturas/Retrabalhos/unidade 2/Osso/2024/4- Abril/09 infinito.jpg"] },
            { data: "10/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Osso/2024/4- Abril/10 pçs.jpg", "capturas/Retrabalhos/unidade 2/Osso/2024/4- Abril/10 grafico.jpg", "capturas/Retrabalhos/unidade 2/Osso/2024/4- Abril/10 infinito.jpg"] },
            { data: "12/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Osso/2024/4- Abril/12 pçs.jpg", "capturas/Retrabalhos/unidade 2/Osso/2024/4- Abril/12 grafico.jpeg", "capturas/Retrabalhos/unidade 2/Osso/2024/4- Abril/12 infinito.jpeg"] },
            { data: "16/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Osso/2024/4- Abril/16 pçs.jpg", "capturas/Retrabalhos/unidade 2/Osso/2024/4- Abril/16 grafico.jpg", "capturas/Retrabalhos/unidade 2/Osso/2024/4- Abril/16 infinito.jpg"] },
            { data: "19/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Osso/2024/4- Abril/19 pçs.jpg", "capturas/Retrabalhos/unidade 2/Osso/2024/4- Abril/19 grafico.jpg", "capturas/Retrabalhos/unidade 2/Osso/2024/4- Abril/19 infinito.jpg"] },
            { data: "24/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Osso/2024/4- Abril/24 pçs.jpg", "capturas/Retrabalhos/unidade 2/Osso/2024/4- Abril/24 grafico.jpg", "capturas/Retrabalhos/unidade 2/Osso/2024/4- Abril/24 infinito.jpg"] },
            { data: "25/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Osso/2024/4- Abril/25 PÇS.jpeg", "capturas/Retrabalhos/unidade 2/Osso/2024/4- Abril/25 grafico.jpeg", "capturas/Retrabalhos/unidade 2/Osso/2024/4- Abril/25infinito.jpeg"] },
            { data: "26/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Osso/2024/4- Abril/26 PÇS.jpeg", "capturas/Retrabalhos/unidade 2/Osso/2024/4- Abril/26 grafico.jpeg", "capturas/Retrabalhos/unidade 2/Osso/2024/4- Abril/26 infinito.jpeg"] },
            { data: "29/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Osso/2024/4- Abril/29 PÇS.jpeg", "capturas/Retrabalhos/unidade 2/Osso/2024/4- Abril/29 grafico.jpeg", "capturas/Retrabalhos/unidade 2/Osso/2024/4- Abril/29 infinito.jpeg"] },

            { data: "06/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Osso/2024/5- Maio/6 pçs.jpeg", "capturas/Retrabalhos/unidade 2/Osso/2024/5- Maio/6 grafico.jpeg", "capturas/Retrabalhos/unidade 2/Osso/2024/5- Maio/6 infinito.jpeg"] },
            { data: "07/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Osso/2024/5- Maio/7 pçs.jpeg", "capturas/Retrabalhos/unidade 2/Osso/2024/5- Maio/7 grafico.jpeg", "capturas/Retrabalhos/unidade 2/Osso/2024/5- Maio/7 infinito.jpeg"] },
            { data: "09/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Osso/2024/5- Maio/9 pçs.jpeg", "capturas/Retrabalhos/unidade 2/Osso/2024/5- Maio/9 grafico.jpeg", "capturas/Retrabalhos/unidade 2/Osso/2024/5- Maio/9 infinito.jpeg"] },
            { data: "10/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Osso/2024/5- Maio/10 pçs.jpg", "capturas/Retrabalhos/unidade 2/Osso/2024/5- Maio/10 grafico.jpg", "capturas/Retrabalhos/unidade 2/Osso/2024/5- Maio/10 infinito.jpg"] },
            { data: "13/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Osso/2024/5- Maio/13 pçs.jpg", "capturas/Retrabalhos/unidade 2/Osso/2024/5- Maio/13 grafico.jpg", "capturas/Retrabalhos/unidade 2/Osso/2024/5- Maio/13 infinito.jpg"] },
            { data: "14/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Osso/2024/5- Maio/14 pçs.jpg", "capturas/Retrabalhos/unidade 2/Osso/2024/5- Maio/14 grafico.jpg", "capturas/Retrabalhos/unidade 2/Osso/2024/5- Maio/14  infinito.jpg"] },
            { data: "16/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Osso/2024/5- Maio/16 pçs.jpg", "capturas/Retrabalhos/unidade 2/Osso/2024/5- Maio/16 grafico.jpg", "capturas/Retrabalhos/unidade 2/Osso/2024/5- Maio/16 infinito.jpg"] },
            { data: "17/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Osso/2024/5- Maio/17 pçs.jpg", "capturas/Retrabalhos/unidade 2/Osso/2024/5- Maio/17 grafico.jpg", "capturas/Retrabalhos/unidade 2/Osso/2024/5- Maio/17 infinito.jpg"] },
            { data: "20/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Osso/2024/5- Maio/20 pçs.jpg", "capturas/Retrabalhos/unidade 2/Osso/2024/5- Maio/20 grafico.jpg", "capturas/Retrabalhos/unidade 2/Osso/2024/5- Maio/20 infinito.jpg"] },
            { data: "21/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Osso/2024/5- Maio/21 pçs.jpg", "capturas/Retrabalhos/unidade 2/Osso/2024/5- Maio/21 grafico.jpg", "capturas/Retrabalhos/unidade 2/Osso/2024/5- Maio/21 infinito.jpg"] },
            { data: "27/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Osso/2024/5- Maio/27 pçs.jpg", "capturas/Retrabalhos/unidade 2/Osso/2024/5- Maio/27 grafico.jpg", "capturas/Retrabalhos/unidade 2/Osso/2024/5- Maio/27 infinito.jpg"] },
            { data: "29/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Osso/2024/5- Maio/27 pçs.jpg", "capturas/Retrabalhos/unidade 2/Osso/2024/5- Maio/27 grafico.jpg", "capturas/Retrabalhos/unidade 2/Osso/2024/5- Maio/27 infinito.jpg"] },
            { data: "30/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Osso/2024/5- Maio/30 1pt.jpg", "capturas/Retrabalhos/unidade 2/Osso/2024/5- Maio/30 2pt.jpg", "capturas/Retrabalhos/unidade 2/Osso/2024/5- Maio/30 g.jpg"] },

            { data: "07/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 2/Osso/7 1pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Osso/7 2pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Osso/7G.jpg"] },
            { data: "11/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 2/Osso/11 1pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Osso/11 02pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Osso/11 g.jpg"] },
            { data: "13/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 2/Osso/13 1pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Osso/13 02pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Osso/13 g.jpg"] },
            { data: "14/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 2/Osso/14 1pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Osso/14 2pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Osso/14 g.jpg"] },
            { data: "17/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 2/Osso/17 1pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Osso/17 2pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Osso/17 g.jpg"] },
            { data: "18/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 2/Osso/18 1pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Osso/18 2pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Osso/18 g.jpg"] },
            { data: "19/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 2/Osso/19 1pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Osso/19 2pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Osso/19 g.jpg"] },
            { data: "20/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 2/Osso/19 1pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Osso/19 2pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Osso/19 g.jpg"] },
            { data: "28/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 2/Osso/28 1pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Osso/28 2pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Osso/28 g.jpg"] },
            
            { data: "05/07/2024", captura: ["capturas/Retrabalhos/2024/7- Julho/Unidade 2/Osso/05 1p.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Osso/05 2pt.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Osso/05 G.jpg"] },
            { data: "09/07/2024", captura: ["capturas/Retrabalhos/2024/7- Julho/Unidade 2/Osso/08 1p.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Osso/08 2pt.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Osso/08 G.jpg"] },
            { data: "12/07/2024", captura: ["capturas/Retrabalhos/2024/7- Julho/Unidade 2/Osso/12 1p.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Osso/12 2pt.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Osso/12 G.jpg"] },
            { data: "19/07/2024", captura: ["capturas/Retrabalhos/2024/7- Julho/Unidade 2/Osso/19 1p.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Osso/19 2pt.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Osso/19 G.jpg"] },


            // { data: "", captura: [""] },
            // { data: "", captura: [""] },
        ],

        Tecido: [
            { data: "27/01/2024", captura: ["capturas/Retrabalhos/unidade 2/Tecido/1- Janeiro/22-01 à 27-01.png", "capturas/Retrabalhos/unidade 2/Tecido/1- Janeiro/22-01 à 27-01 GRAFICO.png"] },
            { data: "28/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Tecido/3- Março/28 pçs.jpg", "capturas/Retrabalhos/unidade 2/Tecido/3- Março/28 grafico.jpg", "capturas/Retrabalhos/unidade 2/Tecido/3- Março/28 ifinito.jpg"] },


            //    { data: "", captura: ["", "", "", ""] },
            //    { data: "", captura: ["", "", "", ""] },
        ],

        Restauracao: [
            { data: "07/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 2/Restauração/7 1pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Restauração/7 2pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Restauração/7 g.jpg"] },
            { data: "11/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 2/Restauração/11 1pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Restauração/11 2pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Restauração/11 g.jpg"] },
            { data: "13/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 2/Restauração/13 1pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Restauração/13 2pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Restauração/13 g.jpg"] },
            { data: "14/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 2/Restauração/14 1pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Restauração/14 2pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Restauração/14 g.jpg"] },
            { data: "17/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 2/Restauração/17 1pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Restauração/17 2pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Restauração/17 g.jpg"] },
            { data: "18/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 2/Restauração/18 1pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Restauração/18 2pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Restauração/18 g.jpg"] },
            { data: "19/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 2/Restauração/19 1pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Restauração/19 2pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Restauração/19 g.jpg"] },
            { data: "20/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 2/Restauração/20 1pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Restauração/20 2pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Restauração/20 g.jpg"] },
            { data: "21/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 2/Restauração/21 1pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Restauração/21 2pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Restauração/21 g.jpg"] },
            { data: "28/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 2/Restauração/28 1pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Restauração/28 2pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Restauração/28 g.jpg"] },

            { data: "05/07/2024", captura: ["capturas/Retrabalhos/2024/7- Julho/Unidade 2/Restauração/05 1pt.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Restauração/05 2pt.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Restauração/5 G.jpg"] },
            { data: "09/07/2024", captura: ["capturas/Retrabalhos/2024/7- Julho/Unidade 2/Restauração/09  2pt.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Restauração/09 1pt.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Restauração/9 G.jpg"] },
            { data: "12/07/2024", captura: ["capturas/Retrabalhos/2024/7- Julho/Unidade 2/Restauração/12 1pt.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Restauração/12 2pt.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Restauração/12 G.jpg"] },
            { data: "19/07/2024", captura: ["capturas/Retrabalhos/2024/7- Julho/Unidade 2/Restauração/19 1pt.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Restauração/19 2pt.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Restauração/19 G.jpg"] }


            // { data: "", captura: ["", "", "", "", ""] },
            // { data: "", captura: ["", "", "", "", ""] },
        ],

        Us_un2: [
            { data: "25/11/2023", captura: ["capturas/Retrabalhos/unidade 2/Usinagem/11- Novembro/20-25.png"] },
            { data: "02/12/2023", captura: ["capturas/Retrabalhos/unidade 2/Usinagem/11- Novembro/27.png"] },

            { data: "09/12/2023", captura: ["capturas/Retrabalhos/unidade 2/Usinagem/12-Dezembro/semana 04-12 à 12-12.png"] },
            
            { data: "16/12/2023", captura: ["capturas/Retrabalhos/unidade 2/Usinagem/12-Dezembro/semana 11-12 à 15-12.png"] },

            { data: "20/12/2023", captura: ["capturas/Retrabalhos/unidade 2/Usinagem/12-Dezembro/semana 18-12 à 20-12.png"] },

            { data: "12/01/2024", captura: ["capturas/Retrabalhos/unidade 2/Usinagem/2024/1- Janeiro/09-01 À 12-01.png"] },
            { data: "19/01/2024", captura: ["capturas/Retrabalhos/unidade 2/Usinagem/2024/1- Janeiro/15-01 À 19-01.png"] },
            { data: "26/01/2024", captura: ["capturas/Retrabalhos/unidade 2/Usinagem/2024/1- Janeiro/22-01 À 26-01.png"] },

            { data: "02/02/2024", captura: ["capturas/Retrabalhos/unidade 2/Usinagem/2024/2- Fevereiro/29-01 À 02-02.png"] },
            { data: "05/02/2024", captura: ["capturas/Retrabalhos/unidade 2/Usinagem/2024/2- Fevereiro/05-07.png"] },
            { data: "23/02/2024", captura: ["capturas/Retrabalhos/unidade 2/Usinagem/2024/2- Fevereiro/19-23.png"] },
            { data: "26/02/2024", captura: ["capturas/Retrabalhos/unidade 2/Usinagem/2024/3- Março/26-02.png"] },

            { data: "08/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Usinagem/2024/3- Março/8.png"] },
            { data: "11/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Usinagem/2024/3- Março/11.png"] },
            { data: "15/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Usinagem/2024/3- Março/15.jpg"] },
            { data: "18/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Usinagem/2024/3- Março/18-pt1.png", "capturas/Retrabalhos/unidade 2/Usinagem/2024/3- Março/18-pt2.png"] },
            { data: "19/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Usinagem/2024/3- Março/19-pt1.png", "capturas/Retrabalhos/unidade 2/Usinagem/2024/3- Março/19-pt2.png", "capturas/Retrabalhos/unidade 2/Usinagem/2024/3- Março/19-pt3.png", "capturas/Retrabalhos/unidade 2/Usinagem/2024/3- Março/19-pt4.png"] },
            { data: "20/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Usinagem/2024/3- Março/20 COMPL.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/3- Março/20 COMPL GRAFICO.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/3- Março/20 TAMPOS.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/3- Março/20 TAMPOS GRAFICO.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/3- Março/20 INFINITO.jpg"] },
            { data: "21/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Usinagem/2024/3- Março/21-pt1.png", "capturas/Retrabalhos/unidade 2/Usinagem/2024/3- Março/21-pt2.png", "capturas/Retrabalhos/unidade 2/Usinagem/2024/3- Março/21-pt3.png", "capturas/Retrabalhos/unidade 2/Usinagem/2024/3- Março/21-pt4.png", "capturas/Retrabalhos/unidade 2/Usinagem/2024/3- Março/21-G.jpeg"] },
            { data: "22/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Usinagem/2024/3- Março/22-pt1.png", "capturas/Retrabalhos/unidade 2/Usinagem/2024/3- Março/22-pt2.jpeg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/3- Março/22-pt3.png", "capturas/Retrabalhos/unidade 2/Usinagem/2024/3- Março/22-pt4.png", "capturas/Retrabalhos/unidade 2/Usinagem/2024/3- Março/22-G.jpeg"] },
            { data: "25/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Usinagem/2024/3- Março/25-pt1.png", "capturas/Retrabalhos/unidade 2/Usinagem/2024/3- Março/25-pt2.jpeg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/3- Março/25-pt3.png", "capturas/Retrabalhos/unidade 2/Usinagem/2024/3- Março/25-pt4.jpeg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/3- Março/25-G.jpeg"] },
            { data: "26/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Usinagem/2024/3- Março/26-pt1.png", "capturas/Retrabalhos/unidade 2/Usinagem/2024/3- Março/26-pt2.jpeg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/3- Março/26-G.jpeg"] },
            { data: "27/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Usinagem/2024/3- Março/27 COMPL.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/3- Março/27 COMPL GRAFICO.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/3- Março/27 TAMPOS.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/3- Março/27 TAMPOS GRAFICO.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/3- Março/27 INFINITO.jpg"] },
            { data: "28/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Usinagem/2024/3- Março/28 COMPL.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/3- Março/28 COMPL GRAFICO.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/3- Março/28 TAMPOS.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/3- Março/28 TAMPOS GRAFICO.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/3- Março/28 INFINITO.jpg"] },

            { data: "02/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Usinagem/2024/4- Abril/02 cadeiras.png", "capturas/Retrabalhos/unidade 2/Usinagem/2024/4- Abril/02 cad.graficos.png", "capturas/Retrabalhos/unidade 2/Usinagem/2024/4- Abril/02 base .png", "capturas/Retrabalhos/unidade 2/Usinagem/2024/4- Abril/02 base grafico.png", "capturas/Retrabalhos/unidade 2/Usinagem/2024/4- Abril/02 infinito.png"] },
            { data: "03/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Usinagem/2024/4- Abril/03 cad.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/4- Abril/03 cad grafico.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/4- Abril/03 base.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/4- Abril/03 base grafico.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/4- Abril/03 infinito.png"] },
            { data: "01/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Usinagem/2024/4- Abril/01 cad.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/4- Abril/01 cad grafico.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/4- Abril/01 base.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/4- Abril/01 base grafico.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/4- Abril/01 infinito.jpg"] },
            { data: "04/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Usinagem/2024/4- Abril/04 cad.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/4- Abril/04 cad grafico.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/4- Abril/04 base.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/4- Abril/04 base grafico.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/4- Abril/04 infinito.jpg"] },
            { data: "05/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Usinagem/2024/4- Abril/05 cad.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/4- Abril/05 cad grafico.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/4- Abril/05 base.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/4- Abril/05 base grafico.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/4- Abril/05 infinito.jpg"] },
            { data: "08/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Usinagem/2024/4- Abril/08 cad.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/4- Abril/08 cad grafico.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/4- Abril/08 base.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/4- Abril/08 base grafico.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/4- Abril/08 infinito.jpg"] },
            { data: "09/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Usinagem/2024/4- Abril/09 cad.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/4- Abril/09 cad grafico.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/4- Abril/09 base.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/4- Abril/09 base grafico.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/4- Abril/09 infinito.jpg"] },
            { data: "10/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Usinagem/2024/4- Abril/10 cad.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/4- Abril/10 cad grafico.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/4- Abril/10 base.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/4- Abril/10 base grafico.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/4- Abril/10 infinito.jpg"] },
            { data: "12/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Usinagem/2024/4- Abril/12 cad.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/4- Abril/12 cad grafico.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/4- Abril/12 base.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/4- Abril/12 base grafico.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/4- Abril/12 infinito.jpg"] },
            { data: "16/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Usinagem/2024/4- Abril/16 cad.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/4- Abril/16 cad grafico.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/4- Abril/16 base.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/4- Abril/16 base grafico.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/4- Abril/16 infinito.jpg"] },
            { data: "19/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Usinagem/2024/4- Abril/19 cad.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/4- Abril/19 cad grafico.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/4- Abril/19 base.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/4- Abril/19 base grafico.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/4- Abril/19 infinito.jpg"] },
            { data: "24/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Usinagem/2024/4- Abril/24 cad.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/4- Abril/24 cad grafico.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/4- Abril/24 base.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/4- Abril/24 base grafico.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/4- Abril/24 infinito.jpg"] },
            { data: "25/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Usinagem/2024/4- Abril/25 cad.jpeg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/4- Abril/25 cad grafico.jpeg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/4- Abril/25 bases.jpeg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/4- Abril/25 bases grafico.jpeg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/4- Abril/25 infinito.jpeg"] },
            { data: "26/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Usinagem/2024/4- Abril/26 cad.jpeg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/4- Abril/26 cad grafico.jpeg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/4- Abril/26 bases.jpeg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/4- Abril/26 bases grafico.jpeg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/4- Abril/26 infinito.jpeg"] },
            { data: "29/04/2024", captura: ["capturas/Retrabalhos/unidade 2/Usinagem/2024/4- Abril/29 cad.jpeg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/4- Abril/29 cad grafico.jpeg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/4- Abril/29 bases.jpeg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/4- Abril/29 bases grafico.jpeg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/4- Abril/29 infinito.jpeg"] },

            { data: "06/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/6 Cad.jpeg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/6 Cad grafico.jpeg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/6 base.jpeg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/6 base grafico.jpeg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/6 inifito.jpeg"] },
            { data: "07/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/7 Cad.jpeg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/7 Cad grafico.jpeg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/7 base.jpeg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/7 base grafico.jpeg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/7 inifito.jpeg"] },
            { data: "08/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/8 Cad.jpeg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/8 Cad grafico.jpeg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/8 base.jpeg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/8 base grafico.jpeg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/8 inifito.jpeg"] },
            { data: "09/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/9 Cad.jpeg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/9 Cad grafico.jpeg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/9 base.jpeg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/9 base grafico.jpeg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/9 inifito.jpeg"] },
            { data: "10/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/10 cad.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/10 cad grafico.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/10 base.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/10 base grafico.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/10 infinito.jpg"] },
            { data: "13/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/13 cad.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/13 cad grafico.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/13 base.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/13 base grafico.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/13 infinito.jpg"] },
            { data: "14/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/14 cad.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/14 cad grafico.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/14 base.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/14 base grafico.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/14 infinito.jpg"] },
            { data: "16/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/16 cad.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/16 cad grafico.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/16 base.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/16 base grafico.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/16 infinito.jpg"] },
            { data: "17/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/17 cad.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/17 cad grafico.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/17 base.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/17 base grafico.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/17 infinito.jpg"] },
            { data: "20/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/20 cad.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/20 cad grafico.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/20 base.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/20 base grafico.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/20 infinito.jpg"] },
            { data: "21/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/21 cad.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/21 cad grafico.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/21 base.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/21 base grafico.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/21 infinito.jpg"] },
            { data: "23/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/23 cad.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/23 cad grafico.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/23 base.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/23 base grafico.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/23 infinito.jpg"] },
            { data: "24/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/24 1pt.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/24 2pt.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/24 3pt.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/24 4pt.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/24 G.jpg"] },
            { data: "27/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/27 1pt.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/27 2pt.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/27 3pt.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/27 4pt.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/27  infinito.jpg"] },
            { data: "29/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/29 1pt.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/29 2pt.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/29 3pt.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/29 4pt.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/29 g.jpg"] },
            { data: "30/05/2024", captura: ["capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/30 1pt.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/30 2pt.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/30 3pt.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/30 4pt.jpg", "capturas/Retrabalhos/unidade 2/Usinagem/2024/5- Maio/30 g.jpg"] },

            { data: "07/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 2/Usinagem/07-1pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Usinagem/07-2pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Usinagem/07-3pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Usinagem/07-4pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Usinagem/7G.jpg"] },
            { data: "11/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 2/Usinagem/11 1pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Usinagem/11 2pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Usinagem/11 3pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Usinagem/11 4pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Usinagem/11 G.jpg"] },
            { data: "13/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 2/Usinagem/13 1pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Usinagem/13 2pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Usinagem/13 3pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Usinagem/13 4pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Usinagem/13g.jpg"] },
            { data: "14/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 2/Usinagem/14 1pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Usinagem/14 2pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Usinagem/14 3pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Usinagem/14 4pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Usinagem/14 g.jpg"] },
            { data: "17/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 2/Usinagem/17 1pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Usinagem/17 2pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Usinagem/17 3pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Usinagem/17 4pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Usinagem/17 g.jpg"] },
            { data: "18/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 2/Usinagem/18 1pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Usinagem/18 2pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Usinagem/18 3pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Usinagem/18 4pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Usinagem/18 G.jpg"] },
            { data: "19/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 2/Usinagem/19 1pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Usinagem/19 2pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Usinagem/19 3pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Usinagem/19 4pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Usinagem/19 G.jpg"] },
            { data: "20/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 2/Usinagem/20 1pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Usinagem/20 2pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Usinagem/20 3pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Usinagem/20 4pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Usinagem/20 G.jpg"] },
            { data: "21/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 2/Usinagem/21 1pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Usinagem/21 2pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Usinagem/21 3pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Usinagem/21 4pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Usinagem/21 G.jpg"] },
            { data: "28/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 2/Usinagem/28 1pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Usinagem/28 2pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Usinagem/28 3pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Usinagem/28 4pt.jpg", "capturas/Retrabalhos/2024/6- Junho/Unidade 2/Usinagem/28 g.jpg"] },

            { data: "05/07/2024", captura: ["capturas/Retrabalhos/2024/7- Julho/Unidade 2/Usinagem/05 1pt.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Usinagem/05 2pt.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Usinagem/05 3pt.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Usinagem/05 4pt.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Usinagem/5G.jpg"] },
            { data: "09/07/2024", captura: ["capturas/Retrabalhos/2024/7- Julho/Unidade 2/Usinagem/09 1pt.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Usinagem/09 2pt.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Usinagem/09 3pt.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Usinagem/09 4pt.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Usinagem/9G.jpg"] },
            { data: "12/07/2024", captura: ["capturas/Retrabalhos/2024/7- Julho/Unidade 2/Usinagem/12 1pt.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Usinagem/12 2pt.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Usinagem/12 3pt.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Usinagem/12 4pt.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Usinagem/12 G.jpg"] },
            { data: "19/07/2024", captura: ["capturas/Retrabalhos/2024/7- Julho/Unidade 2/Usinagem/19 1pt.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Usinagem/19 2pt.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Usinagem/19 3pt.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Usinagem/19 4pt.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 2/Usinagem/19 G.jpg"] },


            // { data: "", captura: [""] },
            // { data: "", captura: [""] },
        ],
    },

    UR3: {
        Un_3: [
            { data: "25/11/2023", captura: ["capturas/Retrabalhos/unidade 3/11- Novembro/20-25.png"] },
            
            { data: "09/12/2023", captura: ["capturas/Retrabalhos/unidade 3/12-Dezembro/semana 04-12 às 09-12.png"] },

            { data: "16/12/2023", captura: ["capturas/Retrabalhos/unidade 3/12-Dezembro/11-12 ÀS 15-12.png"] },
            
            { data: "20/12/2023", captura: ["capturas/Retrabalhos/unidade 3/12-Dezembro/18-12 ÀS 20-12.png"] },

            { data: "12/01/2024", captura: ["capturas/Retrabalhos/unidade 3/2024/1- Janeiro/09-01 À 12-01.png"] },
            { data: "19/01/2024", captura: ["capturas/Retrabalhos/unidade 3/2024/1- Janeiro/15-01 À 19-01.png"] },
            { data: "26/01/2024", captura: ["capturas/Retrabalhos/unidade 3/2024/1- Janeiro/22-01 À 26-01.png"] },

            { data: "02/02/2024", captura: ["capturas/Retrabalhos/unidade 3/2024/2- Fevereiro/29-01 à 02-02.png"] },
            { data: "05/02/2024", captura: ["capturas/Retrabalhos/unidade 3/2024/2- Fevereiro/05-07.png"] },
            { data: "23/02/2024", captura: ["capturas/Retrabalhos/unidade 3/2024/2- Fevereiro/19-23.png"] },
            { data: "26/02/2024", captura: ["capturas/Retrabalhos/unidade 3/2024/3- Março/26-02.png"] },

            { data: "07/03/2024", captura: ["capturas/Retrabalhos/unidade 3/2024/3- Março/7.png"] },
            { data: "08/03/2024", captura: ["capturas/Retrabalhos/unidade 3/2024/3- Março/8.png"] },
            { data: "15/03/2024", captura: ["capturas/Retrabalhos/unidade 3/2024/3- Março/15.jpg"] },
            { data: "18/03/2024", captura: ["capturas/Retrabalhos/unidade 3/2024/3- Março/18-pt1.png", "capturas/Retrabalhos/unidade 3/2024/3- Março/18-pt2.png", "capturas/Retrabalhos/unidade 3/2024/3- Março/18-pt3.png", "capturas/Retrabalhos/unidade 3/2024/3- Março/18-pt4.png"] },
            { data: "19/03/2024", captura: ["capturas/Retrabalhos/unidade 3/2024/3- Março/19-pt1.png", "capturas/Retrabalhos/unidade 3/2024/3- Março/19-pt2.png", "capturas/Retrabalhos/unidade 3/2024/3- Março/19-pt3.png", "capturas/Retrabalhos/unidade 3/2024/3- Março/19-pt4.png"] },
            { data: "20/03/2024", captura: ["capturas/Retrabalhos/unidade 3/2024/3- Março/20-pt1.png", "capturas/Retrabalhos/unidade 3/2024/3- Março/20-pt2.png", "capturas/Retrabalhos/unidade 3/2024/3- Março/20-pt3.png", "capturas/Retrabalhos/unidade 3/2024/3- Março/20-pt4.png"] },
            { data: "21/03/2024", captura: ["capturas/Retrabalhos/unidade 3/2024/3- Março/21-pt1.png", "capturas/Retrabalhos/unidade 3/2024/3- Março/21-pt2.png", "capturas/Retrabalhos/unidade 3/2024/3- Março/21-pt3.png", "capturas/Retrabalhos/unidade 3/2024/3- Março/21-pt4.png", "capturas/Retrabalhos/unidade 3/2024/3- Março/21-G.jpeg"] },
            { data: "22/03/2024", captura: ["capturas/Retrabalhos/unidade 3/2024/3- Março/22-pt1.png", "capturas/Retrabalhos/unidade 3/2024/3- Março/22-pt2.png", "capturas/Retrabalhos/unidade 3/2024/3- Março/22-pt3.png", "capturas/Retrabalhos/unidade 3/2024/3- Março/22-pt4.png", "capturas/Retrabalhos/unidade 3/2024/3- Março/22-G.jpeg"] },
            { data: "25/03/2024", captura: ["capturas/Retrabalhos/unidade 3/2024/3- Março/25-pt1.png", "capturas/Retrabalhos/unidade 3/2024/3- Março/25-pt2.png", "capturas/Retrabalhos/unidade 3/2024/3- Março/25-pt3.png", "capturas/Retrabalhos/unidade 3/2024/3- Março/25-pt4.png", "capturas/Retrabalhos/unidade 3/2024/3- Março/25-G.jpeg"] },
            { data: "26/03/2024", captura: ["capturas/Retrabalhos/unidade 3/2024/3- Março/26-pt1.png", "capturas/Retrabalhos/unidade 3/2024/3- Março/26-pt2.png", "capturas/Retrabalhos/unidade 3/2024/3- Março/26-G.jpeg"] },
            { data: "28/03/2024", captura: ["capturas/Retrabalhos/unidade 3/2024/3- Março/28-pt1.png", "capturas/Retrabalhos/unidade 3/2024/3- Março/26-pt2.png", "capturas/Retrabalhos/unidade 3/2024/3- Março/28-G.jpeg"] },

            { data: "01/04/2024", captura: ["capturas/Retrabalhos/unidade 3/2024/4- Abril/1-pt1.png", "capturas/Retrabalhos/unidade 3/2024/4- Abril/1-pt2.jpeg", "capturas/Retrabalhos/unidade 3/2024/4- Abril/1-pt3.png", "capturas/Retrabalhos/unidade 3/2024/4- Abril/1-pt4.jpeg", "capturas/Retrabalhos/unidade 3/2024/4- Abril/1-G.jpeg"] },
            { data: "03/04/2024", captura: ["capturas/Retrabalhos/unidade 3/2024/4- Abril/3-pt1.png", "capturas/Retrabalhos/unidade 3/2024/4- Abril/1-pt2.jpeg", "capturas/Retrabalhos/unidade 3/2024/4- Abril/3-pt3.png", "capturas/Retrabalhos/unidade 3/2024/4- Abril/1-pt4.jpeg", "capturas/Retrabalhos/unidade 3/2024/4- Abril/1-G.jpeg"] },
            { data: "04/04/2024", captura: ["capturas/Retrabalhos/unidade 3/2024/4- Abril/4-pt1.png", "capturas/Retrabalhos/unidade 3/2024/4- Abril/1-pt2.jpeg", "capturas/Retrabalhos/unidade 3/2024/4- Abril/4-pt2.png", "capturas/Retrabalhos/unidade 3/2024/4- Abril/1-pt4.jpeg", "capturas/Retrabalhos/unidade 3/2024/4- Abril/1-G.jpeg"] },
            { data: "05/04/2024", captura: ["capturas/Retrabalhos/unidade 3/2024/4- Abril/5-pt1.png", "capturas/Retrabalhos/unidade 3/2024/4- Abril/5-pt2.png", "capturas/Retrabalhos/unidade 3/2024/4- Abril/5-pt3.png", "capturas/Retrabalhos/unidade 3/2024/4- Abril/1-pt4.jpeg", "capturas/Retrabalhos/unidade 3/2024/4- Abril/5-G.jpeg"] },
            { data: "08/04/2024", captura: ["capturas/Retrabalhos/unidade 3/2024/4- Abril/8-pt1.png", "capturas/Retrabalhos/unidade 3/2024/4- Abril/8-pt2.jpeg", "capturas/Retrabalhos/unidade 3/2024/4- Abril/8-pt3.png", "capturas/Retrabalhos/unidade 3/2024/4- Abril/8-pt4.jpeg", "capturas/Retrabalhos/unidade 3/2024/4- Abril/8-G.jpeg"] },
            { data: "10/04/2024", captura: ["capturas/Retrabalhos/unidade 3/2024/4- Abril/10-pt1.png", "capturas/Retrabalhos/unidade 3/2024/4- Abril/8-pt2.jpeg", "capturas/Retrabalhos/unidade 3/2024/4- Abril/10-pt3.png", "capturas/Retrabalhos/unidade 3/2024/4- Abril/8-pt4.jpeg", "capturas/Retrabalhos/unidade 3/2024/4- Abril/8-G.jpeg"] },
            { data: "12/04/2024", captura: ["capturas/Retrabalhos/unidade 3/2024/4- Abril/12-pt1.png", "capturas/Retrabalhos/unidade 3/2024/4- Abril/12-pt2.jpeg", "capturas/Retrabalhos/unidade 3/2024/4- Abril/12-pt3.png", "capturas/Retrabalhos/unidade 3/2024/4- Abril/12-pt4.jpeg", "capturas/Retrabalhos/unidade 3/2024/4- Abril/12-G.jpeg"] },
            { data: "16/04/2024", captura: ["capturas/Retrabalhos/unidade 3/2024/4- Abril/16-pt1.png", "capturas/Retrabalhos/unidade 3/2024/4- Abril/16-pt2.jpeg", "capturas/Retrabalhos/unidade 3/2024/4- Abril/16-pt3.png", "capturas/Retrabalhos/unidade 3/2024/4- Abril/16-pt4.jpeg", "capturas/Retrabalhos/unidade 3/2024/4- Abril/16-G.jpeg"] },
            { data: "19/04/2024", captura: ["capturas/Retrabalhos/unidade 3/2024/4- Abril/19-pt1.png", "capturas/Retrabalhos/unidade 3/2024/4- Abril/16-pt2.jpeg", "capturas/Retrabalhos/unidade 3/2024/4- Abril/19-pt3.png", "capturas/Retrabalhos/unidade 3/2024/4- Abril/16-pt4.jpeg", "capturas/Retrabalhos/unidade 3/2024/4- Abril/16-G.jpeg"] },
            { data: "26/04/2024", captura: ["capturas/Retrabalhos/unidade 3/2024/4- Abril/26-pt1.png", "capturas/Retrabalhos/unidade 3/2024/4- Abril/26-pt3.png"] },

            { data: "03/05/2024", captura: ["capturas/Retrabalhos/unidade 3/2024/5- Maio/3-pt1.png", "capturas/Retrabalhos/unidade 3/2024/5- Maio/3-pt2.jpeg", "capturas/Retrabalhos/unidade 3/2024/5- Maio/3-pt3.png", "capturas/Retrabalhos/unidade 3/2024/5- Maio/3-pt4.jpeg", "capturas/Retrabalhos/unidade 3/2024/5- Maio/3-g.jpeg"] },
            { data: "06/05/2024", captura: ["capturas/Retrabalhos/unidade 3/2024/5- Maio/6-pt1.png", "capturas/Retrabalhos/unidade 3/2024/5- Maio/6-pt2.jpeg", "capturas/Retrabalhos/unidade 3/2024/5- Maio/6-pt3.png", "capturas/Retrabalhos/unidade 3/2024/5- Maio/6-pt4.jpeg", "capturas/Retrabalhos/unidade 3/2024/5- Maio/6-g.jpeg"] },
            { data: "07/05/2024", captura: ["capturas/Retrabalhos/unidade 3/2024/5- Maio/7-pt1.png", "capturas/Retrabalhos/unidade 3/2024/5- Maio/6-pt4.jpeg", "capturas/Retrabalhos/unidade 3/2024/5- Maio/7-g.jpeg"] },
            { data: "09/05/2024", captura: ["capturas/Retrabalhos/unidade 3/2024/5- Maio/9-pt1.png", "capturas/Retrabalhos/unidade 3/2024/5- Maio/6-pt2.jpeg", "capturas/Retrabalhos/unidade 3/2024/5- Maio/6-pt4.jpeg", "capturas/Retrabalhos/unidade 3/2024/5- Maio/9-g.jpeg"] },
            { data: "10/05/2024", captura: ["capturas/Retrabalhos/unidade 3/2024/5- Maio/10-pt1.png", "capturas/Retrabalhos/unidade 3/2024/5- Maio/6-pt2.jpeg", "capturas/Retrabalhos/unidade 3/2024/5- Maio/6-pt4.jpeg", "capturas/Retrabalhos/unidade 3/2024/5- Maio/9-g.jpeg"] },
            { data: "13/05/2024", captura: ["capturas/Retrabalhos/unidade 3/2024/5- Maio/13-pt1.png", "capturas/Retrabalhos/unidade 3/2024/5- Maio/13-pt2.jpeg", "capturas/Retrabalhos/unidade 3/2024/5- Maio/13-pt3.jpeg", "capturas/Retrabalhos/unidade 3/2024/5- Maio/13-g.jpeg"] },
            { data: "16/05/2024", captura: ["capturas/Retrabalhos/unidade 3/2024/5- Maio/16-pt1.png", "capturas/Retrabalhos/unidade 3/2024/5- Maio/13-pt2.jpeg", "capturas/Retrabalhos/unidade 3/2024/5- Maio/13-pt3.jpeg", "capturas/Retrabalhos/unidade 3/2024/5- Maio/13-g.jpeg"] },
            { data: "17/05/2024", captura: ["capturas/Retrabalhos/unidade 3/2024/5- Maio/17-pt1.png", "capturas/Retrabalhos/unidade 3/2024/5- Maio/13-pt2.jpeg", "capturas/Retrabalhos/unidade 3/2024/5- Maio/13-pt3.jpeg", "capturas/Retrabalhos/unidade 3/2024/5- Maio/13-g.jpeg"] },
            { data: "20/05/2024", captura: ["capturas/Retrabalhos/unidade 3/2024/5- Maio/20-pt1.png", "capturas/Retrabalhos/unidade 3/2024/5- Maio/20-pt2.jpeg", "capturas/Retrabalhos/unidade 3/2024/5- Maio/20-pt3.jpeg", "capturas/Retrabalhos/unidade 3/2024/5- Maio/20-g.jpeg"] },
            { data: "21/05/2024", captura: ["capturas/Retrabalhos/unidade 3/2024/5- Maio/21-pt1.png", "capturas/Retrabalhos/unidade 3/2024/5- Maio/21-pt2.jpeg", "capturas/Retrabalhos/unidade 3/2024/5- Maio/21-pt3.jpeg", "capturas/Retrabalhos/unidade 3/2024/5- Maio/21-g.jpeg"] },
            { data: "23/05/2024", captura: ["capturas/Retrabalhos/unidade 3/2024/5- Maio/23 1pt.jpg", "capturas/Retrabalhos/unidade 3/2024/5- Maio/23 2pt.jpg", "capturas/Retrabalhos/unidade 3/2024/5- Maio/23 3pt.jpg", "capturas/Retrabalhos/unidade 3/2024/5- Maio/23 4pt.jpg", "capturas/Retrabalhos/unidade 3/2024/5- Maio/23g.jpg"] },
            { data: "24/05/2024", captura: ["capturas/Retrabalhos/unidade 3/2024/5- Maio/24-pt1.png", "capturas/Retrabalhos/unidade 3/2024/5- Maio/24-pt2.jpeg", "capturas/Retrabalhos/unidade 3/2024/5- Maio/24-pt3.jpeg", "capturas/Retrabalhos/unidade 3/2024/5- Maio/24-g.jpeg"] },
            { data: "27/05/2024", captura: ["capturas/Retrabalhos/unidade 3/2024/5- Maio/27-pt1.png", "capturas/Retrabalhos/unidade 3/2024/5- Maio/27-pt2.jpeg", "capturas/Retrabalhos/unidade 3/2024/5- Maio/27-pt3.jpeg", "capturas/Retrabalhos/unidade 3/2024/5- Maio/27-g.jpeg"] },
            { data: "29/05/2024", captura: ["capturas/Retrabalhos/unidade 3/2024/5- Maio/29-pt1.png", "capturas/Retrabalhos/unidade 3/2024/5- Maio/29-pt2.jpeg", "capturas/Retrabalhos/unidade 3/2024/5- Maio/29-pt3.jpeg", "capturas/Retrabalhos/unidade 3/2024/5- Maio/29-g.jpeg"] },
            { data: "30/05/2024", captura: ["capturas/Retrabalhos/unidade 3/2024/5- Maio/30-pt1.png", "capturas/Retrabalhos/unidade 3/2024/5- Maio/30-pt2.jpeg", "capturas/Retrabalhos/unidade 3/2024/5- Maio/30-pt3.jpeg", "capturas/Retrabalhos/unidade 3/2024/5- Maio/30-g.jpeg"] },

            { data: "07/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 3/7-pt1.png", "capturas/Retrabalhos/2024/6- Junho/Unidade 3/7-pt2.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 3/7-pt3.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 3/7-g.jpeg"] },
            { data: "11/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 3/11-pt1.png", "capturas/Retrabalhos/2024/6- Junho/Unidade 3/11-pt2.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 3/11-pt3.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 3/11-g.jpeg"] },
            { data: "13/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 3/13-pt1.png", "capturas/Retrabalhos/2024/6- Junho/Unidade 3/13-pt2.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 3/13-pt3.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 3/13-g.jpeg"] },
            { data: "14/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 3/14-pt1.png", "capturas/Retrabalhos/2024/6- Junho/Unidade 3/13-pt2.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 3/13-pt3.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 3/13-g.jpeg"] },
            { data: "17/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 3/17-pt1.png", "capturas/Retrabalhos/2024/6- Junho/Unidade 3/17-pt2.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 3/17-pt3.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 3/17-g.jpeg"] },
            { data: "18/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 3/18-pt1.png", "capturas/Retrabalhos/2024/6- Junho/Unidade 3/17-pt2.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 3/17-pt3.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 3/17-g.jpeg"] },
            { data: "19/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 3/19-pt1.png", "capturas/Retrabalhos/2024/6- Junho/Unidade 3/19-pt2.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 3/19-pt3.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 3/19-g.jpeg"] },
            { data: "21/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 3/21-pt1.png", "capturas/Retrabalhos/2024/6- Junho/Unidade 3/21-pt2.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 3/21-pt3.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 3/21-g.jpeg"] },
            { data: "28/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 3/28-pt1.png", "capturas/Retrabalhos/2024/6- Junho/Unidade 3/28-pt2.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 3/28-ptg.jpeg"] },

            { data: "05/07/2024", captura: ["capturas/Retrabalhos/2024/7- Julho/Unidade 3/5-pt1.png", "capturas/Retrabalhos/2024/7- Julho/Unidade 3/5-pt2.jpeg", "capturas/Retrabalhos/2024/7- Julho/Unidade 3/5-pt3.jpeg", "capturas/Retrabalhos/2024/7- Julho/Unidade 3/5-pt4.jpeg"] },
            { data: "09/07/2024", captura: ["capturas/Retrabalhos/2024/7- Julho/Unidade 3/9-pt1.jpeg", "capturas/Retrabalhos/2024/7- Julho/Unidade 3/9-pt2.jpeg", "capturas/Retrabalhos/2024/7- Julho/Unidade 3/9-pt3.png", "capturas/Retrabalhos/2024/7- Julho/Unidade 3/9-pt4.jpeg"] },
            { data: "12/07/2024", captura: ["capturas/Retrabalhos/2024/7- Julho/Unidade 3/12-pt1.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 3/12-pt2.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 3/12-pt3.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 3/12-pt4.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 3/12 g.jpg"] },
            { data: "19/07/2024", captura: ["capturas/Retrabalhos/2024/7- Julho/Unidade 3/19-pt1.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 3/19-pt2.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 3/19-pt3.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 3/19-pt4.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 3/19 g.jpg"] },


            // { data: "", captura: [""] },
            // { data: "", captura: [""] },
        ],
    },

    UR4: {
        Un_4: [
            { data: "25/11/2023", captura: ["capturas/Retrabalhos/unidade 4/11- Novembro/20-25.png"] },
            { data: "02/12/2023", captura: ["capturas/Retrabalhos/unidade 4/11- Novembro/27.png"] },

            { data: "09/12/2023", captura: ["capturas/Retrabalhos/unidade 4/12-Dezembro/semana 04 à 09-12.png"] },

            { data: "16/12/2023", captura: ["capturas/Retrabalhos/unidade 4/12-Dezembro/11-12 À 15-12.png"] },

            { data: "20/12/2023", captura: ["capturas/Retrabalhos/unidade 4/12-Dezembro/18-12 À 20-12.png"] },

            { data: "12/01/2024", captura: ["capturas/Retrabalhos/unidade 4/2024/1- Janeiro/09-01 Á 12-01.png"] },
            { data: "19/01/2024", captura: ["capturas/Retrabalhos/unidade 4/2024/1- Janeiro/15-01 Á 19-01.png"] },
            { data: "26/01/2024", captura: ["capturas/Retrabalhos/unidade 4/2024/1- Janeiro/22-01 Á 26-01.png"] },

            { data: "02/02/2024", captura: ["capturas/Retrabalhos/unidade 4/2024/2- Fevereiro/29-01 à 02-02.png"] },
            { data: "05/02/2024", captura: ["capturas/Retrabalhos/unidade 4/2024/2- Fevereiro/05-07.png"] },
            { data: "23/02/2024", captura: ["capturas/Retrabalhos/unidade 4/2024/2- Fevereiro/19-23.png"] },
            { data: "26/02/2024", captura: ["capturas/Retrabalhos/unidade 4/2024/3- Março/26-02.png"] },

            { data: "08/03/2024", captura: ["capturas/Retrabalhos/unidade 4/2024/3- Março/8.png"] },
            { data: "15/03/2024", captura: ["capturas/Retrabalhos/unidade 4/2024/3- Março/15.jpg"] },
            { data: "18/03/2024", captura: ["capturas/Retrabalhos/unidade 4/2024/3- Março/18-pt1.png", "capturas/Retrabalhos/unidade 4/2024/3- Março/18-pt2.png", "capturas/Retrabalhos/unidade 4/2024/3- Março/18-pt3.png", "capturas/Retrabalhos/unidade 4/2024/3- Março/18-pt4.png", "capturas/Retrabalhos/unidade 4/2024/3- Março/18-pt5.png", "capturas/Retrabalhos/unidade 4/2024/3- Março/18-pt6.png", "capturas/Retrabalhos/unidade 4/2024/3- Março/18-pt7.png", "capturas/Retrabalhos/unidade 4/2024/3- Março/18-pt8.png"] },
            { data: "19/03/2024", captura: ["capturas/Retrabalhos/unidade 4/2024/3- Março/19-pt1.png", "capturas/Retrabalhos/unidade 4/2024/3- Março/19-pt2.png", "capturas/Retrabalhos/unidade 4/2024/3- Março/19-pt3.png"] },
            { data: "20/03/2024", captura: ["capturas/Retrabalhos/unidade 4/2024/3- Março/20-pt1.png", "capturas/Retrabalhos/unidade 4/2024/3- Março/20-pt2.png", "capturas/Retrabalhos/unidade 4/2024/3- Março/20-pt3.png"] },
            { data: "21/03/2024", captura: ["capturas/Retrabalhos/unidade 4/2024/3- Março/21-pt1.png", "capturas/Retrabalhos/unidade 4/2024/3- Março/21-pt2.png", "capturas/Retrabalhos/unidade 4/2024/3- Março/21-pt3.png", "capturas/Retrabalhos/unidade 4/2024/3- Março/21-G.jpeg"] },
            { data: "22/03/2024", captura: ["capturas/Retrabalhos/unidade 4/2024/3- Março/22-pt1.png", "capturas/Retrabalhos/unidade 4/2024/3- Março/22-pt2.jpeg", "capturas/Retrabalhos/unidade 4/2024/3- Março/22-G.jpeg"] },
            { data: "25/03/2024", captura: ["capturas/Retrabalhos/unidade 4/2024/3- Março/25-pt1.png", "capturas/Retrabalhos/unidade 4/2024/3- Março/25-pt2.jpeg", "capturas/Retrabalhos/unidade 4/2024/3- Março/25-G.jpeg"] },
            { data: "26/03/2024", captura: ["capturas/Retrabalhos/unidade 4/2024/3- Março/26-pt1.png", "capturas/Retrabalhos/unidade 4/2024/3- Março/25-pt2.jpeg", "capturas/Retrabalhos/unidade 4/2024/3- Março/25-G.jpeg"] },
            { data: "28/03/2024", captura: ["capturas/Retrabalhos/unidade 4/2024/3- Março/28-pt1.png", "capturas/Retrabalhos/unidade 4/2024/3- Março/25-pt2.jpeg", "capturas/Retrabalhos/unidade 4/2024/3- Março/25-G.jpeg"] },
            
            { data: "01/04/2024", captura: ["capturas/Retrabalhos/unidade 4/2024/4- Abril/1-pt1.png", "capturas/Retrabalhos/unidade 4/2024/4- Abril/1-pt2.jpeg", "capturas/Retrabalhos/unidade 4/2024/4- Abril/1-G.jpeg"] },
            { data: "03/04/2024", captura: ["capturas/Retrabalhos/unidade 4/2024/4- Abril/3-pt1.png", "capturas/Retrabalhos/unidade 4/2024/4- Abril/1-pt2.jpeg", "capturas/Retrabalhos/unidade 4/2024/4- Abril/1-G.jpeg"] },
            { data: "04/04/2024", captura: ["capturas/Retrabalhos/unidade 4/2024/4- Abril/4-pt1.png", "capturas/Retrabalhos/unidade 4/2024/4- Abril/1-pt2.jpeg", "capturas/Retrabalhos/unidade 4/2024/4- Abril/1-G.jpeg"] },
            { data: "05/04/2024", captura: ["capturas/Retrabalhos/unidade 4/2024/4- Abril/5-pt1.png", "capturas/Retrabalhos/unidade 4/2024/4- Abril/5-pt2.jpeg", "capturas/Retrabalhos/unidade 4/2024/4- Abril/5-G.jpeg"] },
            { data: "08/04/2024", captura: ["capturas/Retrabalhos/unidade 4/2024/4- Abril/8-pt1.png", "capturas/Retrabalhos/unidade 4/2024/4- Abril/8-pt2.jpeg", "capturas/Retrabalhos/unidade 4/2024/4- Abril/8-G.jpeg"] },
            { data: "10/04/2024", captura: ["capturas/Retrabalhos/unidade 4/2024/4- Abril/10-pt1.png", "capturas/Retrabalhos/unidade 4/2024/4- Abril/10-pt2.jpeg", "capturas/Retrabalhos/unidade 4/2024/4- Abril/10-G.jpeg"] },
            { data: "12/04/2024", captura: ["capturas/Retrabalhos/unidade 4/2024/4- Abril/12-pt1.png", "capturas/Retrabalhos/unidade 4/2024/4- Abril/12-pt2.jpeg", "capturas/Retrabalhos/unidade 4/2024/4- Abril/12-G.jpeg"] },
            { data: "16/04/2024", captura: ["capturas/Retrabalhos/unidade 4/2024/4- Abril/16-pt1.png", "capturas/Retrabalhos/unidade 4/2024/4- Abril/16-pt2.jpeg", "capturas/Retrabalhos/unidade 4/2024/4- Abril/16-G.jpeg"] },
            { data: "19/04/2024", captura: ["capturas/Retrabalhos/unidade 4/2024/4- Abril/19-pt1.png", "capturas/Retrabalhos/unidade 4/2024/4- Abril/19-pt2.jpeg", "capturas/Retrabalhos/unidade 4/2024/4- Abril/19-G.jpeg"] },
            { data: "26/04/2024", captura: ["capturas/Retrabalhos/unidade 4/2024/4- Abril/26-pt1.png", "capturas/Retrabalhos/unidade 4/2024/4- Abril/26-G.jpeg"] },

            { data: "03/05/2024", captura: ["capturas/Retrabalhos/unidade 4/2024/5- Maio/3-pt1.png", "capturas/Retrabalhos/unidade 4/2024/5- Maio/3-pt2.jpeg", "capturas/Retrabalhos/unidade 4/2024/5- Maio/3-g.jpeg"] },
            { data: "06/05/2024", captura: ["capturas/Retrabalhos/unidade 4/2024/5- Maio/6-pt1.png", "capturas/Retrabalhos/unidade 4/2024/5- Maio/6-pt2.jpeg", "capturas/Retrabalhos/unidade 4/2024/5- Maio/6-g.jpeg"] },
            { data: "07/05/2024", captura: ["capturas/Retrabalhos/unidade 4/2024/5- Maio/7-pt1.png", "capturas/Retrabalhos/unidade 4/2024/5- Maio/7-pt2.jpeg", "capturas/Retrabalhos/unidade 4/2024/5- Maio/7-g.jpeg"] },
            { data: "09/05/2024", captura: ["capturas/Retrabalhos/unidade 4/2024/5- Maio/9-pt1.png", "capturas/Retrabalhos/unidade 4/2024/5- Maio/9-pt2.jpeg", "capturas/Retrabalhos/unidade 4/2024/5- Maio/9-g.jpeg"] },
            { data: "10/05/2024", captura: ["capturas/Retrabalhos/unidade 4/2024/5- Maio/10-pt1.png", "capturas/Retrabalhos/unidade 4/2024/5- Maio/9-pt2.jpeg", "capturas/Retrabalhos/unidade 4/2024/5- Maio/9-g.jpeg"] },
            { data: "14/05/2024", captura: ["capturas/Retrabalhos/unidade 4/2024/5- Maio/14-pt1.png", "capturas/Retrabalhos/unidade 4/2024/5- Maio/14-pt2.jpeg", "capturas/Retrabalhos/unidade 4/2024/5- Maio/14-g.jpeg"] },
            { data: "16/05/2024", captura: ["capturas/Retrabalhos/unidade 4/2024/5- Maio/16-pt1.png", "capturas/Retrabalhos/unidade 4/2024/5- Maio/16-pt2.jpeg", "capturas/Retrabalhos/unidade 4/2024/5- Maio/16-g.jpeg"] },
            { data: "17/05/2024", captura: ["capturas/Retrabalhos/unidade 4/2024/5- Maio/17-pt1.png", "capturas/Retrabalhos/unidade 4/2024/5- Maio/14-pt2.jpeg", "capturas/Retrabalhos/unidade 4/2024/5- Maio/14-g.jpeg"] },
            { data: "20/05/2024", captura: ["capturas/Retrabalhos/unidade 4/2024/5- Maio/20-g.jpeg", "capturas/Retrabalhos/unidade 4/2024/5- Maio/20-pt1.png", "capturas/Retrabalhos/unidade 4/2024/5- Maio/20-pt2.jpeg"] },
            { data: "21/05/2024", captura: ["capturas/Retrabalhos/unidade 4/2024/5- Maio/21-pt1.png", "capturas/Retrabalhos/unidade 4/2024/5- Maio/21-pt2.jpeg", "capturas/Retrabalhos/unidade 4/2024/5- Maio/21-g.jpeg"] },
            { data: "23/05/2024", captura: ["capturas/Retrabalhos/unidade 4/2024/5- Maio/23 1pt.jpg", "capturas/Retrabalhos/unidade 4/2024/5- Maio/23 2pt.jpg", "capturas/Retrabalhos/unidade 4/2024/5- Maio/23 g.jpg"] },
            { data: "24/05/2024", captura: ["capturas/Retrabalhos/unidade 4/2024/5- Maio/24-pt1.png", "capturas/Retrabalhos/unidade 4/2024/5- Maio/24-pt2.jpeg", "capturas/Retrabalhos/unidade 4/2024/5- Maio/24-g.jpeg"] },
            { data: "27/05/2024", captura: ["capturas/Retrabalhos/unidade 4/2024/5- Maio/27-pt1.png", "capturas/Retrabalhos/unidade 4/2024/5- Maio/27-pt2.jpeg", "capturas/Retrabalhos/unidade 4/2024/5- Maio/27-g.jpeg"] },
            { data: "29/05/2024", captura: ["capturas/Retrabalhos/unidade 4/2024/5- Maio/29-pt1.png", "capturas/Retrabalhos/unidade 4/2024/5- Maio/29-pt2.jpeg", "capturas/Retrabalhos/unidade 4/2024/5- Maio/29-g.jpeg"] },
            { data: "30/05/2024", captura: ["capturas/Retrabalhos/unidade 4/2024/5- Maio/30-pt1.png", "capturas/Retrabalhos/unidade 4/2024/5- Maio/30-pt2.jpeg", "capturas/Retrabalhos/unidade 4/2024/5- Maio/30-g.jpeg"] },

            { data: "07/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 4/7-pt1.png", "capturas/Retrabalhos/2024/6- Junho/Unidade 4/7-pt2.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 4/7-g.jpeg"] },
            { data: "11/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 4/11-pt1.png", "capturas/Retrabalhos/2024/6- Junho/Unidade 4/11-pt2.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 4/11-g.jpeg"] },
            { data: "13/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 4/13-pt1.png", "capturas/Retrabalhos/2024/6- Junho/Unidade 4/13-pt2.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 4/13-g.jpeg"] },
            { data: "14/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 4/14-pt1.png", "capturas/Retrabalhos/2024/6- Junho/Unidade 4/14-pt2.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 4/14-g.jpeg"] },
            { data: "17/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 4/17-pt1.png", "capturas/Retrabalhos/2024/6- Junho/Unidade 4/17-pt2.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 4/17-g.jpeg"] },
            { data: "18/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 4/18-pt1.png", "capturas/Retrabalhos/2024/6- Junho/Unidade 4/18-pt2.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 4/18-g.jpeg"] },
            { data: "19/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 4/19-pt1.png", "capturas/Retrabalhos/2024/6- Junho/Unidade 4/19-pt2.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 4/19-g.jpeg"] },
            { data: "21/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 4/21-pt1.png", "capturas/Retrabalhos/2024/6- Junho/Unidade 4/21-pt2.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 4/21-g.jpeg"] },
            { data: "28/06/2024", captura: ["capturas/Retrabalhos/2024/6- Junho/Unidade 4/28-pt1.png", "capturas/Retrabalhos/2024/6- Junho/Unidade 4/28-pt2.jpeg", "capturas/Retrabalhos/2024/6- Junho/Unidade 4/28-ptg.jpeg"] },

            { data: "05/07/2024", captura: ["capturas/Retrabalhos/2024/7- Julho/Unidade 4/5-pt1.png", "capturas/Retrabalhos/2024/7- Julho/Unidade 4/5-pt2.jpeg", "capturas/Retrabalhos/2024/7- Julho/Unidade 4/5-pt3.jpeg"] },
            { data: "09/07/2024", captura: ["capturas/Retrabalhos/2024/7- Julho/Unidade 4/9-pt1.png", "capturas/Retrabalhos/2024/7- Julho/Unidade 4/9-pt2.jpeg", "capturas/Retrabalhos/2024/7- Julho/Unidade 4/9-pt3.jpeg"] },
            { data: "12/07/2024", captura: ["capturas/Retrabalhos/2024/7- Julho/Unidade 4/12 1pt.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 4/12 2pt.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 4/12 g.jpg"] },
            { data: "19/07/2024", captura: ["capturas/Retrabalhos/2024/7- Julho/Unidade 4/19 1pt.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 4/19 2pt.jpg", "capturas/Retrabalhos/2024/7- Julho/Unidade 4/19 g.jpg"] },


        //   { data: "", captura: [""] },
        //   { data: "", captura: [""] },
        ],
   },

   UR5: {
        PeG: [
            { data: "19/07/2024", captura: ["capturas/Retrabalhos/2024/7- Julho/ADM/semana3/transporteMotivos.jpg", "capturas/Retrabalhos/2024/7- Julho/ADM/semana3/transporteGrafico.jpeg", "capturas/Retrabalhos/2024/7- Julho/ADM/semana3/pcpMotivos.jpeg", "capturas/Retrabalhos/2024/7- Julho/ADM/semana3/pcpGrafico.png", "capturas/Retrabalhos/2024/7- Julho/ADM/semana3/assistComercialMotivo.png", "capturas/Retrabalhos/2024/7- Julho/ADM/semana3/assistComercialGrafico.png"] },


        //    { data: "", captura: ["", "", "", ""] },
        //    { data: "", captura: ["", "", "", ""] },
        ],
},

    // Notas do PQT:

    UP1: {
        Un1: [

            { data: "02/02/2024", captura: ["capturas/PQT/2024/1- Janeiro/un1.jpg", "capturas/PQT/2024/1- Janeiro/un1_page-0001.jpg", "capturas/PQT/2024/1- Janeiro/un1_page-0002.jpg"] },
            { data: "01/04/2024", captura: ["capturas/PQT/2024/3- Março/un1-G.jpeg", "capturas/PQT/2024/3- Março/un1_page-0001.jpg", "capturas/PQT/2024/3- Março/un1_page-0002.jpg", "capturas/PQT/2024/3- Março/un1_page-0003.jpg"] },
            { data: "23/04/2024", captura: ["capturas/PQT/2024/4- Abril/un1.jpeg", "capturas/PQT/2024/4- Abril/un1_page-0001.jpg", "capturas/PQT/2024/4- Abril/un1_page-0002.jpg", "capturas/PQT/2024/4- Abril/un1_page-0003.jpg"] },
            { data: "30/05/2024", captura: ["capturas/PQT/2024/5- Maio/un1.jpeg", "capturas/PQT/2024/5- Maio/UN1nnconform.jpeg"] },
            { data: "26/06/2024", captura: ["capturas/PQT/2024/6- Junho/un1-pt1.jpeg", "capturas/PQT/2024/6- Junho/un1-pt2.jpeg"] },


            // { data: "", captura: [""] },
        ],
    },

    UP2: {
        Un2: [

            { data: "02/02/2024", captura: ["capturas/PQT/2024/1- Janeiro/un2.jpg", "capturas/PQT/2024/1- Janeiro/un2_page-0001.jpg"] },
            { data: "01/04/2024", captura: ["capturas/PQT/2024/3- Março/un2-G.jpeg", "capturas/PQT/2024/3- Março/un2_page-0001.jpg"] },
            { data: "23/04/2024", captura: ["capturas/PQT/2024/4- Abril/un2.jpeg", "capturas/PQT/2024/4- Abril/un2_page-0001.jpg"] },
            { data: "30/05/2024", captura: ["capturas/PQT/2024/5- Maio/un2.jpeg", "capturas/PQT/2024/5- Maio/UN2nnconform.jpeg"] },
            { data: "26/06/2024", captura: ["capturas/PQT/2024/6- Junho/un2-pt1.jpeg", "capturas/PQT/2024/6- Junho/un2-pt2.jpeg", "capturas/PQT/2024/6- Junho/un2-pt3.jpeg"] },


            // { data: "", captura: [""] },
        ],
    },

    UP3: {
        Un3: [

            { data: "02/02/2024", captura: ["capturas/PQT/2024/1- Janeiro/un3.jpg", "capturas/PQT/2024/1- Janeiro/un3_page-0001.jpg"] },
            { data: "01/04/2024", captura: ["capturas/PQT/2024/3- Março/un3-G.jpeg", "capturas/PQT/2024/3- Março/un3_page-0001.jpg"] },
            { data: "23/04/2024", captura: ["capturas/PQT/2024/4- Abril/un3.jpeg", "capturas/PQT/2024/4- Abril/un3_page-0001.jpg"] },
            { data: "30/05/2024", captura: ["capturas/PQT/2024/5- Maio/un3.jpeg", "capturas/PQT/2024/5- Maio/UN3nnconform.jpeg"] },
            { data: "26/06/2024", captura: ["capturas/PQT/2024/6- Junho/un3-pt1.png", "capturas/PQT/2024/6- Junho/un3-pt3.png"] },


            // { data: "", captura: [""] },
        ],
    },

    UP4: {
        Un4: [

            { data: "02/02/2024", captura: ["capturas/PQT/2024/1- Janeiro/un4.jpg", "capturas/PQT/2024/1- Janeiro/un4_page-0001.jpg"] },
            { data: "01/04/2024", captura: ["capturas/PQT/2024/3- Março/un4-G.jpeg", "capturas/PQT/2024/3- Março/un4_page-0001.jpg"] },
            { data: "23/04/2024", captura: ["capturas/PQT/2024/4- Abril/un4.jpeg", "capturas/PQT/2024/4- Abril/un4_page-0001.jpg"] },
            { data: "30/05/2024", captura: ["capturas/PQT/2024/5- Maio/un4.jpeg", "capturas/PQT/2024/5- Maio/UN4nnconform.jpeg"] },
            { data: "26/06/2024", captura: ["capturas/PQT/2024/6- Junho/un4-pt1.png", "capturas/PQT/2024/6- Junho/un4-pt2.png"] },


            // { data: "", captura: [""] },
        ],
    },

    UP5: {
        Un5: [

            { data: "02/02/2024", captura: ["capturas/PQT/2024/1- Janeiro/almoxarifado.jpg", "capturas/PQT/2024/1- Janeiro/almoxarifado_page-0001.jpg"] },
            { data: "01/04/2024", captura: ["capturas/PQT/2024/3- Março/almoxarifado-G.jpeg", "capturas/PQT/2024/3- Março/almoxarifado_page-0001.jpg"] },
            { data: "23/04/2024", captura: ["capturas/PQT/2024/4- Abril/almoxarifado.jpeg", "capturas/PQT/2024/4- Abril/un5_page-0001.jpg"] },
            { data: "30/05/2024", captura: ["capturas/PQT/2024/5- Maio/unAlmoxarifado.jpeg", "capturas/PQT/2024/5- Maio/UNAnnconform.jpeg"] },
            { data: "26/06/2024", captura: ["capturas/PQT/2024/6- Junho/unA-pt1.png", "capturas/PQT/2024/6- Junho/unA-pt2.png"] },


            // { data: "", captura: [""] },
        ],
    },

    UPG: {
        Geral: [

            { data: "02/02/2024", captura: ["capturas/PQT/2024/1- Janeiro/geral.jpg"] },
            { data: "23/04/2024", captura: ["capturas/PQT/2024/4- Abril/geral.png"] },
            { data: "30/05/2024", captura: ["capturas/PQT/2024/5- Maio/geral.jpeg"] },
            { data: "26/06/2024", captura: ["capturas/PQT/2024/6- Junho/resumo.png"] },

            
            // { data: "", captura: [""] },
        ],
    },

    UAS1: {    // Assistência Técnica:
        fxe1: [
            { data: "15/03/2024", captura: ["capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/15 TAMPOS PÇS.jpg", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/15 TAMPOS GRAFICOS.jpg", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/15 COMPL.jpg", "capturas/Retrabalhos/unidade 1/Expedição/2024/3- Março/15 COMPL GRAFICO.jpg"] },


            // { data: "", captura: ["", ""] },
            // { data: "", captura: ["", ""] },
        ],

        apos_1: [
            { data: "18/12/2023", captura: ["capturas/slides 01/18-12-2023/slide01_page-0001.jpg", "capturas/slides 01/18-12-2023/slide01_page-0002.jpg", "capturas/slides 01/18-12-2023/slide01_page-0003.jpg", "capturas/slides 01/18-12-2023/slide01_page-0004.jpg", "capturas/slides 01/18-12-2023/slide01_page-0005.jpg", "capturas/slides 01/18-12-2023/slide01_page-0006.jpg", "capturas/slides 01/18-12-2023/slide01_page-0007.jpg", "capturas/slides 01/18-12-2023/slide01_page-0008.jpg", "capturas/slides 01/18-12-2023/slide01_page-0009.jpg", "capturas/slides 01/18-12-2023/slide01_page-0010.jpg", "capturas/slides 01/18-12-2023/slide01_page-0011.jpg", "capturas/slides 01/18-12-2023/slide01_page-0012.jpg", "capturas/slides 01/18-12-2023/slide01_page-0013.jpg", "capturas/slides 01/18-12-2023/slide01_page-0014.jpg", "capturas/slides 01/18-12-2023/slide01_page-0015.jpg", "capturas/slides 01/18-12-2023/slide01_page-0016.jpg", "capturas/slides 01/18-12-2023/slide01_page-0017.jpg", "capturas/slides 01/18-12-2023/slide01_page-0018.jpg", "capturas/slides 01/18-12-2023/slide01_page-0019.jpg", "capturas/slides 01/18-12-2023/slide01_page-0020.jpg",] },


            // { data: "", captura: ["", "", ] },
            // { data: "", captura: ["", "", ] },
        ],
    },

    UAS2: {    // Assistência Técnica:
        fxe2: [
            { data: "15/03/2024", captura: ["capturas/Retrabalhos/unidade 2/Expedição/2024/3- Março/15 PÇS.jpg", "capturas/Retrabalhos/unidade 2/Expedição/2024/3- Março/15 GRAFICO.jpg", "capturas/Retrabalhos/unidade 2/Expedição/2024/3- Março/15 G.INFINITO.jpg"] },

            
            // { data: "", captura: ["", "", ""] },
            // { data: "", captura: ["", "", ""] },
        ],

        apos_2: [
            { data: "18/12/2023", captura: ["capturas/slides 02/18-12-2023/slide02_page-0001.jpg", "capturas/slides 02/18-12-2023/slide02_page-0002.jpg", "capturas/slides 02/18-12-2023/slide02_page-0003.jpg", "capturas/slides 02/18-12-2023/slide02_page-0004.jpg", "capturas/slides 02/18-12-2023/slide02_page-0006.jpg", "capturas/slides 02/18-12-2023/slide02_page-0007.jpg", "capturas/slides 02/18-12-2023/slide02_page-0008.jpg", "capturas/slides 02/18-12-2023/slide02_page-0009.jpg", "capturas/slides 02/18-12-2023/slide02_page-0010.jpg", "capturas/slides 02/18-12-2023/slide02_page-0011.jpg", "capturas/slides 02/18-12-2023/slide02_page-0012.jpg", "capturas/slides 02/18-12-2023/slide02_page-0013.jpg", "capturas/slides 02/18-12-2023/slide02_page-0014.jpg", "capturas/slides 02/18-12-2023/slide02_page-0015.jpg", "capturas/slides 02/18-12-2023/slide02_page-0016.jpg", "capturas/slides 02/18-12-2023/slide02_page-0017.jpg", "capturas/slides 02/18-12-2023/slide02_page-0018.jpg", "capturas/slides 02/18-12-2023/slide02_page-0020.jpg", "capturas/slides 02/18-12-2023/slide02_page-0021.jpg", "capturas/slides 02/18-12-2023/slide02_page-0022.jpg", "capturas/slides 02/18-12-2023/slide02_page-0023.jpg", "capturas/slides 02/18-12-2023/slide02_page-0024.jpg", "capturas/slides 02/18-12-2023/slide02_page-0026.jpg", "capturas/slides 02/18-12-2023/slide02_page-0027.jpg", "capturas/slides 02/18-12-2023/slide02_page-0028.jpg", "capturas/slides 02/18-12-2023/slide02_page-0029.jpg",] },


            // { data: "", captura: ["", "", "", "", "", "",] },
            // { data: "", captura: ["", "", "", "", "", "",] },
        ],
    },

    QD1: {    // Qualidade do fornecedor:

        Colpany: [
            { data: "27/11/2023", captura: ["capturas/Retrabalhos/vidros/11- Novembro/COLPANY.png"] },

            { data: "04/12/2023", captura: ["capturas/Retrabalhos/vidros/12-Dezembro/COLPANY 04.png"] },
            { data: "11/12/2023", captura: ["capturas/Qualidade fornecedor/vidros/12-Dezembro/COLPANY 11.png"] },

            { data: "12/01/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/1- Janeiro/COLPANY 09-01 À 12-01.png"] },
            { data: "19/01/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/1- Janeiro/COLPANY 15-01 À 19-01.png"] },            
            { data: "26/01/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/1- Janeiro/COLPANY 22-01 À 26-01.png"] },

            { data: "19/02/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/2- Fevereiro/colpany 19.png"] },
            { data: "25/02/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/2- Fevereiro/colpany 25.png"] },

            { data: "08/03/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/3- Março/Colpany 04.png"] },
            { data: "11/03/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/3- Março/11 Colpany.png"] },
            { data: "18/03/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/3- Março/18 COLPANY.jpg"] },
            { data: "25/03/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/3- Março/25 COLPANY.jpg"] },

            { data: "05/04/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/4- Abril/5 COLPANY.jpg"] },
            { data: "08/04/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/4- Abril/8 COLPANY.jpg"] },
            { data: "15/04/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/4- Abril/15 COLPANY.jpg"] },
            { data: "26/04/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/4- Abril/22 COLPANY.jpg"] },
            { data: "29/04/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/4- Abril/29 company.jpeg"] },
            
            { data: "06/05/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/5- Maio/6 colpany.jpeg"] },
            { data: "13/05/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/5- Maio/13 colpany.jpg"] },
            { data: "20/05/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/5- Maio/20 colpany.jpg"] },
            { data: "27/05/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/5- Maio/27 colpany.jpg"] },
            
            { data: "06/06/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/6- Junho/03 Colpany.jpg"] },
            { data: "10/06/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/6- Junho/10 Colpany.jpg"] },
            { data: "21/06/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/6- Junho/17 Colpany.jpg"] },
            { data: "28/06/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/6- Junho/24 Colpany.jpg"] },
            
            { data: "04/07/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/7- Julho/01 colpany.jpg"] },
            { data: "16/07/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/7- Julho/08 colpany.jpg"] },
            { data: "19/07/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/7- Julho/15 colpany.jpg"] },


            // { data: "", captura: [""] },
            // { data: "", captura: [""] },
        ],

        Fast: [
            { data: "27/11/2023", captura: ["capturas/Retrabalhos/vidros/11- Novembro/FAST GLASS.png"] },

            { data: "04/12/2023", captura: ["capturas/Retrabalhos/vidros/12-Dezembro/FAST GLASS 04.png"] },
            { data: "11/12/2023", captura: ["capturas/Qualidade fornecedor/vidros/12-Dezembro/FAST GLASS 11.png"] },

            { data: "12/01/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/1- Janeiro/FAST GLASS 09-01 À 12-01.png"] },
            { data: "19/01/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/1- Janeiro/FAST GLASS 15-01 À 19-01.png"] },
            { data: "26/01/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/1- Janeiro/FAST GLASS 22-01 À 26-01.png"] },

            { data: "02/02/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/1- Janeiro/FAST GLASS 29-01 À 02-02.png"] },
            { data: "19/02/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/2- Fevereiro/fast class 19.png"] },
            { data: "25/02/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/2- Fevereiro/fast class 25.png"] },

            { data: "08/03/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/3- Março/fast glass 04.png"] },
            { data: "11/03/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/3- Março/11 fast glass.png"] },
            { data: "18/03/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/3- Março/18 FAST CLASS.jpg"] },
            { data: "25/03/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/3- Março/25 FAST CLASS.jpg"] },
            
            { data: "05/04/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/4- Abril/5 FAST GLASS.jpg"] },
            { data: "08/04/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/4- Abril/8 FAST GLASS.jpg"] },
            { data: "15/04/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/4- Abril/15 FAST GLASS.jpg"] },
            { data: "26/04/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/4- Abril/22 FAST GLASS.jpg"] },
            { data: "29/04/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/4- Abril/29 fast glas.jpeg"] },

            { data: "06/05/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/5- Maio/6 fast glass.jpeg"] },
            { data: "13/05/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/5- Maio/13 fast glass.jpg"] },
            { data: "20/05/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/5- Maio/20 fast glass.jpg"] },
            { data: "27/05/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/5- Maio/27 fast glass.jpg"] },

            { data: "06/06/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/6- Junho/03 fast.jpg"] },
            { data: "10/06/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/6- Junho/10 fast.jpg"] },
            { data: "21/06/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/6- Junho/17 fast.jpg"] },
            { data: "28/06/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/6- Junho/24 Fast.jpg"] },

            { data: "04/07/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/7- Julho/01 FAST GLASS.jpg"] },
            { data: "16/07/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/7- Julho/08 FAST GLASS.jpg"] },
            { data: "19/07/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/7- Julho/15 FAST GLASS.jpg"] },


            // { data: "", captura: [""] },
            // { data: "", captura: [""] },
        ],

        Vidros: [
            { data: "27/11/2023", captura: ["capturas/Retrabalhos/vidros/11- Novembro/COLPANY.png", "capturas/Retrabalhos/vidros/11- Novembro/FAST GLASS.png"] },

            { data: "04/12/2023", captura: ["capturas/Retrabalhos/vidros/12-Dezembro/COLPANY 04.png", "capturas/Retrabalhos/vidros/12-Dezembro/FAST GLASS 04.png"] },
            { data: "11/12/2023", captura: ["capturas/Qualidade fornecedor/vidros/12-Dezembro/COLPANY 11.png", "capturas/Qualidade fornecedor/vidros/12-Dezembro/FAST GLASS 11.png"] },

            { data: "12/01/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/1- Janeiro/COLPANY 09-01 À 12-01.png", "capturas/Qualidade fornecedor/vidros/2024/1- Janeiro/FAST GLASS 09-01 À 12-01.png"] },
            { data: "19/01/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/1- Janeiro/COLPANY 15-01 À 19-01.png", "capturas/Qualidade fornecedor/vidros/2024/1- Janeiro/FAST GLASS 15-01 À 19-01.png"] },
            { data: "26/01/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/1- Janeiro/COLPANY 22-01 À 26-01.png", "capturas/Qualidade fornecedor/vidros/2024/1- Janeiro/FAST GLASS 22-01 À 26-01.png"] },

            { data: "02/02/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/1- Janeiro/FAST GLASS 29-01 À 02-02.png"] },
            { data: "19/02/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/2- Fevereiro/colpany 19.png", "capturas/Qualidade fornecedor/vidros/2024/2- Fevereiro/fast class 19.png"] },
            { data: "25/02/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/2- Fevereiro/colpany 25.png", "capturas/Qualidade fornecedor/vidros/2024/2- Fevereiro/fast class 25.png"] },

            { data: "08/03/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/3- Março/Colpany 04.png", "capturas/Qualidade fornecedor/vidros/2024/3- Março/fast glass 04.png"] },
            { data: "11/03/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/3- Março/11 Colpany.png", "capturas/Qualidade fornecedor/vidros/2024/3- Março/11 fast glass.png"] },
            { data: "18/03/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/3- Março/18 COLPANY.jpg", "capturas/Qualidade fornecedor/vidros/2024/3- Março/18 FAST CLASS.jpg"] },
            { data: "25/03/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/3- Março/25 COLPANY.jpg", "capturas/Qualidade fornecedor/vidros/2024/3- Março/25 FAST CLASS.jpg"] },

            { data: "05/04/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/4- Abril/5 COLPANY.jpg", "capturas/Qualidade fornecedor/vidros/2024/4- Abril/5 FAST GLASS.jpg"] },
            { data: "08/04/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/4- Abril/8 COLPANY.jpg", "capturas/Qualidade fornecedor/vidros/2024/4- Abril/8 FAST GLASS.jpg"] },
            { data: "15/04/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/4- Abril/15 COLPANY.jpg", "capturas/Qualidade fornecedor/vidros/2024/4- Abril/15 FAST GLASS.jpg"] },
            { data: "26/04/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/4- Abril/22 COLPANY.jpg", "capturas/Qualidade fornecedor/vidros/2024/4- Abril/22 FAST GLASS.jpg"] },
            { data: "29/04/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/4- Abril/29 company.jpeg", "capturas/Qualidade fornecedor/vidros/2024/4- Abril/29 fast glas.jpeg"] },

            { data: "06/05/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/5- Maio/6 colpany.jpeg", "capturas/Qualidade fornecedor/vidros/2024/5- Maio/6 fast glass.jpeg"] },
            { data: "13/05/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/5- Maio/13 colpany.jpg", "capturas/Qualidade fornecedor/vidros/2024/5- Maio/13 fast glass.jpg"] },
            { data: "20/05/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/5- Maio/20 colpany.jpg", "capturas/Qualidade fornecedor/vidros/2024/5- Maio/20 fast glass.jpg"] },
            { data: "27/05/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/5- Maio/27 colpany.jpg", "capturas/Qualidade fornecedor/vidros/2024/5- Maio/27 fast glass.jpg"] },

            { data: "06/06/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/6- Junho/03 fast.jpg", "capturas/Qualidade fornecedor/vidros/2024/6- Junho/03 Colpany.jpg"] },
            { data: "10/06/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/6- Junho/10 fast.jpg", "capturas/Qualidade fornecedor/vidros/2024/6- Junho/10 Colpany.jpg"] },
            { data: "21/06/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/6- Junho/17 fast.jpg", "capturas/Qualidade fornecedor/vidros/2024/6- Junho/17 Colpany.jpg"] },
            { data: "28/06/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/6- Junho/24 Fast.jpg", "capturas/Qualidade fornecedor/vidros/2024/6- Junho/24 Colpany.jpg"] },

            { data: "04/07/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/7- Julho/01 FAST GLASS.jpg", "capturas/Qualidade fornecedor/vidros/2024/7- Julho/01 colpany.jpg"] },
            { data: "16/07/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/7- Julho/08 FAST GLASS.jpg", "capturas/Qualidade fornecedor/vidros/2024/7- Julho/08 colpany.jpg"] },
            { data: "19/07/2024", captura: ["capturas/Qualidade fornecedor/vidros/2024/7- Julho/15 FAST GLASS.jpg", "capturas/Qualidade fornecedor/vidros/2024/7- Julho/15 colpany.jpg"] },


            // { data: "", captura: ["", ""] },
            // { data: "", captura: ["", ""] },
        ],
    },

    QD2: {    // Qualidade do fornecedor:
        Vidros: [

            // { data: "", captura: ["", ""] },
            // { data: "", captura: ["", ""] },
        ],
    },

    QD3: {    // Qualidade do fornecedor:
        Vidros: [

            // { data: "", captura: ["", ""] },
            // { data: "", captura: ["", ""] },
        ],
    },

    QD4: {    // Qualidade do fornecedor:
        Vidros: [

            // { data: "", captura: ["", ""] },
            // { data: "", captura: ["", ""] },
        ],
    },

    QD5: {    // Qualidade do fornecedor:
        Vidros: [

            // { data: "", captura: ["", ""] },
            // { data: "", captura: ["", ""] },
        ],
    },

    DS1: {    // Disperdício de matérial:
        Tampos: [

            // { data: "", captura: ["", ""] },
            // { data: "", captura: ["", ""] },
        ],
    },

    DS2: {    // Disperdício de matérial:
        Tampos: [

            // { data: "", captura: ["", ""] },
            // { data: "", captura: ["", ""] },
        ],
    },

    DS3: {    // Disperdício de matérial:
        Tampos: [

            // { data: "", captura: ["", ""] },
            // { data: "", captura: ["", ""] },
        ],
    },

    DS4: {    // Disperdício de matérial:
        Tampos: [
            { data: "04/12/2023", captura: ["capturas/Unidade 4/Disperdicio/tampos/DESPERDICIO DE TAMPO 04-12.png"] },

            { data: "31/01/2024", captura: ["capturas/Unidade 4/Disperdicio/tampos/2024/JANEIRO.png"] },
            { data: "29/02/2024", captura: ["capturas/Unidade 4/Disperdicio/tampos/2024/FEVEREIRO.png"] },
            { data: "28/03/2024", captura: ["capturas/Unidade 4/Disperdicio/tampos/2024/MARÇO.jpg"] },
            { data: "30/04/2024", captura: ["capturas/Unidade 4/Disperdicio/tampos/2024/ABRIL.jpeg"] },
            { data: "31/05/2024", captura: ["capturas/Unidade 4/Disperdicio/tampos/2024/MAIO.jpg"] },
            { data: "30/06/2024", captura: ["capturas/Unidade 4/Disperdicio/tampos/2024/JUNHO.jpg"] },


            // { data: "", captura: ["", ""] },
        ],
    },

    DS5: {    // Disperdício de matérial:
        Tampos: [

            // { data: "", captura: ["", ""] },
            // { data: "", captura: ["", ""] },
        ],
    },

    CS1: {    // Consumo de matérial:
        Tampos: [

            // { data: "", captura: ["", ""] },
            // { data: "", captura: ["", ""] },
        ],
    },

    CS2: {    // Consumo de matérial:
        Tampos: [

            // { data: "", captura: ["", ""] },
            // { data: "", captura: ["", ""] },
        ],
    },

    CS3: {    // Consumo de matérial:
        Tampos: [

            // { data: "", captura: ["", ""] },
            // { data: "", captura: ["", ""] },
        ],
    },

    CS4: {    // Consumo de matérial:
        Chapas: [
            { data: "04/12/2023", captura: ["capturas/Unidade 4/Consumo/CONSUMO DE CHAPAS.png"] },
            { data: "31/12/2023", captura: ["capturas/Unidade 4/Consumo/CONSUMO DE CHAPAS DEZEMBRO 2023.png"] },
            
            { data: "31/01/2024", captura: ["capturas/Unidade 4/Consumo/2024/JANEIRO.png"] },
            { data: "29/02/2024", captura: ["capturas/Unidade 4/Consumo/2024/FEVEREIRO.png"] },
            { data: "28/03/2024", captura: ["capturas/Unidade 4/Consumo/2024/MARÇO.jpg"] },
            { data: "30/04/2024", captura: ["capturas/Unidade 4/Consumo/2024/ABRIL.jpeg"] },
            { data: "31/05/2024", captura: ["capturas/Unidade 4/Consumo/2024/MAIO.jpg"] },
            { data: "30/06/2024", captura: ["capturas/Unidade 4/Consumo/2024/JUNHO.jpg"] },


            // { data: "", captura: [""] },
            // { data: "", captura: [""] },
        ],
    },

    CS5: {    // Consumo de matérial:
        Tampos: [

            // { data: "", captura: ["", ""] },
            // { data: "", captura: ["", ""] },
        ],
    },
};

function exibirInformação(unidade) {
    // Exibe a mensagem de carregamento
    exibirMensagemDeCarregamento(unidade);

    listaDeUrls = []
    console.log(listaDeUrls)

    let data_input = document.getElementById(`dataInput_${unidade}`).value;
    let setor = document.getElementById(`setorSelect_${unidade}`).value;
    let capturas = unidades[unidade][setor];
    
    let detalhesContainer = document.getElementById(`detalhesContainer_${unidade}`);
    let detalhesContainerAlert = document.getElementById(`detalhesContainer_alert_${unidade}`);
    detalhesContainer.innerHTML = ''; // Limpar o conteúdo antes de adicionar novas capturas
    detalhesContainerAlert.innerHTML = ''; // Limpar o conteúdo do alerta

    let capturasEncontradas = false;

    // Função para exibir as imagens
    function exibirImagens() {
        

        for (let i = 0; i < capturas.length; i++) {
            let dataFormatada = capturas[i].data.split('/').reverse().join('-');

            if (dataFormatada === data_input) {
                for (let j = 0; j < capturas[i].captura.length; j++) {
                    listaDeUrls.push(capturas[i].captura[j]);

                    let novaImagem = document.createElement('img');
                    novaImagem.src = capturas[i].captura[j];
                    novaImagem.alt = data_input;

                    let novoDetalhe = document.createElement('div');
                    novoDetalhe.classList.add('detalhes');
                    novoDetalhe.innerHTML = `
                        <div class="detalhes-container"></div>
                    `;

                    novoDetalhe.querySelector('.detalhes-container').appendChild(novaImagem);

                    detalhesContainer.appendChild(novoDetalhe);
                }
                capturasEncontradas = true;

                const ocultar = document.querySelectorAll('.ocultar');
                ocultar.forEach(ocultar => {
                    ocultar.style.display = 'none';
                });

                const ocultar_dois = document.querySelectorAll('.ocultar_dois');
                ocultar_dois.forEach(ocultar_dois => {
                    ocultar_dois.style.display = 'flex';
                    ocultar_dois.style.align = 'center';
                });

                const main = document.querySelectorAll('.inicial__mn');
                main.forEach(main => {
                    main.style.height = '100vh';
                });
            }
        }
        console.log(listaDeUrls)

        // Esconde a mensagem de carregamento após o carregamento das imagens
        esconderMensagemDeCarregamento(unidade);

        if (!capturasEncontradas) {
            detalhesContainerAlert.innerHTML = "Apontamento não finalizado!";
        } else {
            detalhesContainerAlert.innerHTML = ''; // Limpar o conteúdo do alerta se novas capturas foram encontradas
        }
    }

    // Adiciona um tempo de espera (5 segundos) para simular o carregamento
    setTimeout(exibirImagens, 5000);

};

function exibirMensagemDeCarregamento(unidade) {
    let alerta_carregamento = document.getElementById(`loadingMessage_${unidade}`);

    if (alerta_carregamento) {
        alerta_carregamento.style.display = 'flex';

    } else {
        console.error(`Elemento de carregamento não encontrado para a unidade ${unidade}`);
    }
}

function esconderMensagemDeCarregamento(unidade) {
    let alerta_carregamento = document.getElementById(`loadingMessage_${unidade}`);

    if (alerta_carregamento) {
        alerta_carregamento.style.display = 'none';
    } else {
        console.error(`Elemento de carregamento não encontrado para a unidade ${unidade}`);
    }
}

function atualizarInputData(unidade) {
    let data_input = document.getElementById(`dataInput_${unidade}`);
    let setor = document.getElementById(`setorSelect_${unidade}`).value;
    let capturas = unidades[unidade][setor];

    // Verificar se o setor selecionado existe nas unidades
    if (!capturas) {
        console.error(`Setor ${setor} não encontrado para a unidade ${unidade}`);
        return;
    }

    let ultimaData = capturas[capturas.length - 1].data;

    // Convertendo o formato da data de "dd/mm/yyyy" para "yyyy-MM-dd"
    let dataFormatada = ultimaData.split('/').reverse().join('-');
    console.log(dataFormatada);

    // Atribuindo a data formatada ao valor do input
    data_input.value = dataFormatada;
    exibirInformação(unidade)
}

// Função para diminuir o índice em 1
function diminuirIndice(indice) {
    // Verificar se o índice é válido
    if (indice > 0) {
        return indice - 1;
    } else {
        console.error(`Erro ao diminuir o índice, índice inválido`);
        return indice;
    }
}

function aumentarIndice(indice) {
    // Verificar se o índice é válido
    if (indice >= 0) {
        return indice + 1;
    } else {
        console.error(`Erro ao aumentar o índice, índice inválido`);
        return indice;
    }
}

// BOTÕES

function proximoDia(unidade) {
    let data_input = document.getElementById(`dataInput_${unidade}`);
    let setor = document.getElementById(`setorSelect_${unidade}`).value;
    let capturas = unidades[unidade][setor];
    
    // Verificar se o setor selecionado existe nas unidades
    if (!capturas) {
        console.error(`Setor ${setor} não encontrado para a unidade ${unidade}`);
        return;
    }

    let dataFormatada = data_input.value; // Obter a data formatada do input

    // Converter o formato da data de entrada para o formato do array capturas
    let dataComparacao = dataFormatada.split('-').reverse().join('/');

    // Percorrer o array de capturas
    for (let i = 0; i < capturas.length; i++) {
        if (capturas[i].data === dataComparacao) { // Verificar se a data corresponde
            if (i < capturas.length - 1) {
                let proximaData = capturas[i + 1].data;
                console.log(`Próxima Data: ${proximaData}`);

                let tituloUnidade = document.querySelector(`#${unidade} h6`);
                tituloUnidade.scrollIntoView({ behavior: 'smooth' });

                // Converter a próxima data para o formato "dd/MM/yyyy"
                partesData = proximaData.split('/'); // Dividir a data em partes
                proximaData = `${partesData[2]}-${partesData[1]}-${partesData[0]}`; // Formatar para "dd/MM/yyyy"
                
                // Atribuir a próxima data ao valor do input
                data_input.value = proximaData;
                return; // Sair da função após encontrar a data
            } else {
                console.error(`Não há data posterior disponível`);
                return;
            }
        }
    }
    console.error(`Data ${dataFormatada} não encontrada no array de capturas`);
}

function diaAnterior(unidade) {
    let data_input = document.getElementById(`dataInput_${unidade}`);
    let setor = document.getElementById(`setorSelect_${unidade}`).value;
    let capturas = unidades[unidade][setor];
    
    // Verificar se o setor selecionado existe nas unidades
    if (!capturas) {
        console.error(`Setor ${setor} não encontrado para a unidade ${unidade}`);
        return;
    }

    let dataFormatada = data_input.value; // Obter a data formatada do input

    // Converter o formato da data de entrada para o formato do array capturas
    let dataComparacao = dataFormatada.split('-').reverse().join('/');

    // Percorrer o array de capturas de trás para frente
    for (let i = capturas.length - 1; i >= 0; i--) {
        if (capturas[i].data === dataComparacao) { // Verificar se a data corresponde
            if (i > 0) {
                let proximaData = capturas[i - 1].data;
                console.log(`Próxima Data: ${proximaData}`);

                let tituloUnidade = document.querySelector(`#${unidade} h6`);
                tituloUnidade.scrollIntoView({ behavior: 'smooth' });

                // Converter a próxima data para o formato "dd/MM/yyyy"
                partesData = proximaData.split('/'); // Dividir a data em partes
                proximaData = `${partesData[2]}-${partesData[1]}-${partesData[0]}`; // Formatar para "dd/MM/yyyy"
                
                // Atribuir a próxima data ao valor do input
                data_input.value = proximaData;
                return; // Sair da função após encontrar a data
            } else {
                console.error(`Não há data anterior disponível`);
                return;
            }
        }
    }
    console.error(`Data ${dataFormatada} não encontrada no array de capturas`);
}

function voltar (unidade) {
    let detalhesContainer = document.getElementById(`detalhesContainer_${unidade}`);
    detalhesContainer.innerHTML = "";

    let detalhesContainerAlerta = document.getElementById(`detalhesContainer_alert_${unidade}`);
    detalhesContainerAlerta.innerHTML = "";

    let tituloUnidade = document.querySelector(`#${unidade} h6`);
    tituloUnidade.scrollIntoView({ behavior: 'smooth' });


    const menu = document.querySelector('.inicial__menu');
    menu.style.display = 'flex';

    const unidades = document.querySelectorAll('.unidade');
    unidades.forEach(unidade => {
        unidade.style.display = 'none';
    });
    
    const ocultar = document.querySelectorAll('.ocultar');
    ocultar.forEach(ocultar => {
        ocultar.style.display = 'flex';
    });

    const main = document.querySelectorAll('.inicial__mn');
    main.forEach(main => {
        main.style.height =  'calc(100vh - 174px)';  
    });
}

function limparDetalhes(unidade) {
    let detalhesContainer = document.getElementById(`detalhesContainer_${unidade}`);
    detalhesContainer.innerHTML = "";

    let detalhesContainerAlerta = document.getElementById(`detalhesContainer_alert_${unidade}`);
    detalhesContainerAlerta.innerHTML = "";

    const ocultar = document.querySelectorAll('.ocultar');
    ocultar.forEach(ocultar => {
        ocultar.style.display = 'flex';
    });

    const ocultar_dois = document.querySelectorAll('.ocultar_dois');
    ocultar_dois.forEach(ocultar_dois => {
        ocultar_dois.style.display = 'none';
    });

    const main = document.querySelectorAll('.inicial__mn');
    main.forEach(main => {
        main.style.height =  'calc(100vh - 174px)'; 
    });
}
