const listaPokemon = [
    {
        id : "PK",
        nome : "Pikachu",
        immagine: "https://media.pokemoncentral.it/wiki/thumb/4/4e/Artwork025_RFVF.png/200px-Artwork025_RFVF.png",
        stats : {
            ps : 35,
            attacco: 55,
            difesa: 40,
            attSp: 50,
            difSp: 50,
            velocita: 90
        },

        descrizione: "Pikachu è un piccolo roditore con una notevole capacità di immagazzinare energia elettrica. La sua pelliccia è gialla con due strisce marroni sul dorso, ha le orecchie con le punte nere, una piccola bocca a forma di 3 rovesciato, occhi neri con pupille bianche e guance rosse; le zampe anteriori hanno cinque dita, mentre quelle posteriori tre e ha una coda a forma di fulmine nei maschi, mentre nelle femmine si ha una coda con alla fine un cuore. Nonostante sia un Pokémon quadrupede, spesso cammina eretto. Può essere collegato a Plusle, Minun, Pachirisu, Emolga e Dedenne per la somiglianza fisica."
    },
    {
        id : " ",
        nome : "Araquanid",
        immagine: "https://media.pokemoncentral.it/wiki/thumb/6/6c/Artwork752_SL.png/200px-Artwork752_SL.png",
        attacco: "ATTACCO:70",
        stats : {
            ps : 35,
            attacco: 55,
            difesa: 40,
            attSp: 50,
            difSp: 50,
            velocita: 90
        },
        descrizione: "Araquanid è simile ad un ragno. La testa è immersa in una bolla d'acqua e mostra tre protuberanze blu sulla fronte. Gli occhi sono blu. Ha sei zampe molto sottili, di colore verde e blu, che al posto dei legamenti presentano delle bolle d'acqua. Queste zampe si collegano al corpo, che è nero, con un segno marroncino sulla parte superiore e nella parte posteriore del corpo è presente un pungiglione verde."
    },
    {
        id : " ",
        nome : "Dedenne",
        immagine: "https://media.pokemoncentral.it/wiki/thumb/7/72/Artwork702_XY.png/200px-Artwork702_XY.png",
        attacco: "ATTACCO:58",
        stats : {
            ps : 35,
            attacco: 55,
            difesa: 40,
            attSp: 50,
            difSp: 50,
            velocita: 90
        },
        descrizione: "Dedenne si presenta come un piccolo criceto di color arancio chiaro. Le sue orecchie sono all'insù e di due colori: l'esterno nero e l'interno giallo chiaro. Le zampe anteriori sono arancioni. La pancia è anch'essa di color giallo chiaro. Il corpo di Dedenne termina con due zampine arancioni dotate di tre dita. Presenta inoltre due guance di arancione più scuro con delle antenne che usa per comunicare con gli altri esemplari della sua specie e una coda nera che utilizza, inserendola in una presa di corrente, per ricaricarsi."
    },
    {
        id : " ",
        nome : "Lechonk",
        immagine: "https://media.pokemoncentral.it/wiki/thumb/4/46/Artwork915.png/200px-Artwork915.png",
        attacco: "ATTACCO:45",
        stats : {
            ps : 35,
            attacco: 55,
            difesa: 40,
            attSp: 50,
            difSp: 50,
            velocita: 90
        },
        descrizione: "Lechonk è un piccolo porcellino nero. Ha una chiazza marrone che si estende sul viso e sulle orecchie e delle escrescenze gialle sotto gli occhi. Ha un muso rosa triangolare con delle enormi narici di forma ovale e dei piedi tozzi che terminano in piccoli zoccoli rosa. La sua coda è corta ed arricciata."
    },
    {
        id : " ",
        nome : "Pincurchin",
        immagine: "https://media.pokemoncentral.it/wiki/thumb/c/ca/Artwork871_SpSc.png/200px-Artwork871_SpSc.png",
        attacco: "ATTACCO:101",
        stats : {
            ps : 35,
            attacco: 55,
            difesa: 40,
            attSp: 50,
            difSp: 50,
            velocita: 90
        },
        descrizione: "Pincurchin è un Pokémon marino simile a un riccio di mare con un corpo nero. Il suo viso ha due occhi gialli con pupille nere a forma di triangolo; e due guance gialle e tonde. Una serie di spine acuminate corre lungo la sua schiena e ai lati del corpo. Ogni spina ha una punta grigiastra che si illumina di giallo quando la corrente elettrica la attraversa."
    },
    {
        id : " ",
        nome : "Pyukumuku",
        immagine: "https://media.pokemoncentral.it/wiki/thumb/1/13/Artwork771_SL.png/200px-Artwork771_SL.png",
        attacco: "ATTACCO:60",
        stats : {
            ps : 35,
            attacco: 55,
            difesa: 40,
            attSp: 50,
            difSp: 50,
            velocita: 90
        },
        descrizione: "Pyukumuku è un piccolo Pokémon simile ad un cetriolo di mare. Il corpo è marrone scuro e di forma ovale ed è rivestito da sei punte color fucsia. Sul retro c'è una piccola coda a batuffolo, mentre il muso è composto da due occhietti dello stesso colore delle punte e da una piccola bocca di colore bianco."
    },
    {
        id : " ",
        nome : "Smoliv",
        immagine: "https://media.pokemoncentral.it/wiki/thumb/d/d2/Artwork935.png/200px-Artwork935.png",
        attacco: "ATTACCO:35",
        stats : {
            ps : 35,
            attacco: 55,
            difesa: 40,
            attSp: 50,
            difSp: 50,
            velocita: 90
        },
        descrizione: "Smoliv è un piccolo Pokémon simile ad un'oliva. Ha un corpo verde con delle minuscole gambe, gli occhi neri con le pupille bianche e la bocca a zig-zag. Sulla sommità della testa sono presenti delle foglie che circondano un piccolo frutto giallo nel quale Smoliv immagazzina il suo olio."
    },
    {
        id : " ",
        nome : "Tyrogue",
        immagine: "https://media.pokemoncentral.it/wiki/thumb/2/21/Artwork236_HGSS.png/200px-Artwork236_HGSS.png",
        attacco: "ATTACCO:35",
        stats : {
            ps : 35,
            attacco: 55,
            difesa: 40,
            attSp: 50,
            difSp: 50,
            velocita: 90
        },
        descrizione: "Tyrogue ha aspetto di un lottatore con la pelle viola e un paio di pantaloncini e un paio di scarpe, entrambi marroni. Intorno alla vita e ai polsi ha delle fasciature di benda bianca, altra caratteristica che lo fa assomigliare ad un lottatore. Ha una cresta con tre punte sulla testa, mani con tre dita e gli occhi gialli."
    },
    {
        id : " ",
        nome : "Sprigatito",
        immagine: "https://media.pokemoncentral.it/wiki/thumb/5/52/Artwork906.png/200px-Artwork906.png",
        attacco: "ATTACCO:61",
        stats : {
            ps : 35,
            attacco: 55,
            difesa: 40,
            attSp: 50,
            difSp: 50,
            velocita: 90
        },
        descrizione: "Sprigatito è un Pokémon felino quadrupede ricoperto di pelo verde chiaro. Ha orecchie verdi con l'interno verde pallido, un ciuffo di pelo sulla parte anteriore del petto e una macchia verde intorno agli occhi e al naso rosa che richiama la sagoma delle foglie. Vanta inoltre due denti appuntiti nella mascella superiore, una coda vaporosa e piccole zampe prive di dita visibili.Sprigatito è un Pokémon felino quadrupede ricoperto di pelo verde chiaro. Ha orecchie verdi con l'interno verde pallido, un ciuffo di pelo sulla parte anteriore del petto e una macchia verde intorno agli occhi e al naso rosa che richiama la sagoma delle foglie. Vanta inoltre due denti appuntiti nella mascella superiore, una coda vaporosa e piccole zampe prive di dita visibili."
    },
]


export default listaPokemon;