const Alexa = require('ask-sdk-core');

const i18n = require('i18next');//idiomas 
const sprintf = require('i18next-sprintf-postprocessor'); //idiomas

//ESTO ES LO DE LENGUAJES
const languageStrings = {
en: {
translation: {
    WELCOME_MESSAGE: 'Welcome to Oaxaca Curiosities',
    GET_INTRODUCCION: 'Playing Video ...',
    LUGARES_TURISTICOS: 'Oaxaca is a city full of history, culture, and natural beauty. Some of the most outstanding tourist places are: the Zócalo of Oaxaca, the Temple of Santo Domingo de Guzmán, Monte Albán, Hierve el Agua, Mitla, and Teotitlán del Valle.',
    COMIDA_TIPICA: 'Oaxaca has a great variety of typical food, including: "Mole Oaxaqueño", "Tlayudas", "Tamales Oaxaqueños", "Chapulines", "Quesillo", "Chocolate Oaxaqueño", "Enchiladas Oaxaqueñas"',
    TRAJE_TIPICO: 'The most typical and recognized costume of Oaxaca is the Tehuana Costume. This costume is emblematic of the region and consists of an embroidered blouse called huipil, a long pleated skirt known as enredo, a wool shawl called quechquemitl, and a knotted belt at the waist. It is mainly worn by women and is a symbol of the cultural identity of Oaxaca, especially in the Isthmus of Tehuantepec regions.',
    PERSONAJES_SOBRESALIENTES: 'Some of the most outstanding figures from Oaxaca are Benito Juárez, Rufino Tamayo, José Vasconcelos, Álvaro Carrillo, and Lila Downs.',
    MUSICA_TRADICIONAL: 'Playing Music ...',
    
    HOLA_MUNDO: 'Hello World',
    HELP_MESSAGE: 'Hi! How can I help you? Try saying some phrases like:',
    GOODBYE_MESSAGE: 'Goodbye! Thanks for using Oaxaca Curiosities.',
    REFLECTOR_MESSAGE: 'You just activated %s',
    FALLBACK_MESSAGE: 'Sorry, I don\'t know about that. Please try again.',
    ERROR_MESSAGE: 'Sorry, I had trouble doing what you asked. Please try again.',
    
    FRASES_DATA: [
        'Alexa, "describe to me what the city of Oaxaca is like"',
        'Alexa, "what are the tourist places in Oaxaca"',
        'Alexa, "what are the typical foods of Oaxaca"',
        'Alexa, "what is the typical costume of the city of Oaxaca"',
        'Alexa, "who are the most outstanding figures from Oaxaca"',
        'Alexa, "what music is listened to in Oaxaca"',
    ]
}

},
es: {
    translation: {
        WELCOME_MESSAGE: 'Bienvenido a Curiosidades de Oaxaca',
        GET_INTRODUCCION:'Reproduciendo Video ...',
        LUGARES_TURISTICOS: 'Oaxaca es una ciudad llena de historia, cultura y belleza natural. Algunos de los lugares turísticos más destacados son: el Zócalo de Oaxaca, el Templo de Santo Domingo de Guzmán, Monte Albán, Hierve el Agua, Mitla y Teotitlán del Valle.',
        COMIDA_TIPICA: 'Oaxaca tiene una gran variedad de comida típica, entre ellas está el: "Mole Oaxaqueño", "Tlayudas", "Tamales Oaxaqueños", "Chapulines", "Quesillo", "Chocolate Oaxaqueño", "Enchiladas Oaxaqueñas"',
        TRAJE_TIPICO: 'El traje más típico y reconocido de Oaxaca es el Traje de Tehuana. Este traje es emblemático de la región y consiste en una blusa bordada llamada huipil, una falda larga plisada conocida como enredo, un chal de lana llamado quechquemitl y un cinturón anudado a la cintura. Es usado principalmente por mujeres y es símbolo de la identidad cultural de Oaxaca, especialmente en las regiones del Istmo de Tehuantepec.',
        PERSONAJES_SOBRESALIENTES: 'Algunos de los personajes más sobresalientes de Oaxaca son Benito Juárez, Rufino Tamayo, José Vasconcelos, Álvaro Carrillo y Lila Downs.',
        MUSICA_TRADICIONAL: 'Reproduciendo Musica ...',
        
        HOLA_MUNDO: 'Hola Mundo',
        HELP_MESSAGE: '¡Hola! ¿Cómo te puedo ayudar? prueba a decir algunas frases como:',
        GOODBYE_MESSAGE: '¡Adios!, Gracias por usar Curiosidades de Oaxaca.',
        REFLECTOR_MESSAGE: 'Acabas de activar %s',
        FALLBACK_MESSAGE: 'Lo siento, no sé sobre eso. Inténtalo de nuevo.',
        ERROR_MESSAGE: 'Lo siento, tuve problemas para hacer lo que me pediste. Inténtalo de nuevo.',
        
        FRASES_DATA: [
            'Alexa, "describeme como es la ciudad de oaxaca"',
            'Alexa, "cuáles son los lugares turísticos de oaxaca"',
            'Alexa, "cuáles son las comidas tipicas de oaxaca"',
            'Alexa, "cuál es el traje típico de la ciudad de oaxaca"',
            'Alexa, "cuáles son los personajes más sobresalientes de oaxaca"',
            'Alexa, "cuál es la música que se escucha en Oaxaca"',
        ]
    }
}
}


//CONSTANTE DE BIENVENIDA
const DOCUMENT_ID1 = "BienvenidaAPL";

const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
    },
    handle(handlerInput) {
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const speakOutput = requestAttributes.t('WELCOME_MESSAGE');
        
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            const aplDirective = createDirectivePayload1(DOCUMENT_ID1, datasource1);
            handlerInput.responseBuilder.addDirective(aplDirective);
        }
        
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const datasource1 = {
    "headlineTemplateData": {
        "type": "object",
        "objectId": "headlineSample",
        "properties": {
            "backgroundImage": {
                "contentDescription": null,
                "smallSourceUrl": null,
                "largeSourceUrl": null,
                "sources": [
                    {
                        "url": "https://travellersworldwide.com/wp-content/uploads/2022/06/shutterstock_1766876666-e1696447065696.jpg",
                        "size": "large"
                    }
                ]
            },
            "textContent": {
                "primaryText": {
                    "type": "PlainText",
                    "text": "Curiosidades de la Ciudad de Oaxaca"
                }
            },
            "logoUrl": "https://i.pinimg.com/originals/f8/f1/1d/f8f11db7f2146d6dc9218d4fe046307f.png",
            "hintText": "Prueba: \"Alexa, ¿Describeme como es la ciudad de Oxaca?\""
        }
    }
};

const createDirectivePayload1 = (aplDocumentId, dataSources = {}, tokenId = "documentToken") => {
    return {
        type: "Alexa.Presentation.APL.RenderDocument",
        token: tokenId,
        document: {
            type: "Link",
            src: "doc://alexa/apl/documents/" + aplDocumentId
        },
        datasources: dataSources
    }
}; /////// ESTO ES DE BIENVENIDA ******************************++


const DescripcionIntentHandler = {// ESTA SERA LA FUNCION PARA LA DESCRIPCION DE OAXACA
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'DescripcionIntent';
    },
    handle(handlerInput) {
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const speakOutput = requestAttributes.t('GET_INTRODUCCION');
        
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            const aplDirective = createDirectivePayload22(DOCUMENT_ID22, datasource22);
            handlerInput.responseBuilder.addDirective(aplDirective);
        }
        
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const DOCUMENT_ID22 = "DescripcionAPL";

const datasource22 = {
    "videoPlayerTemplateData": {
        "type": "object",
        "properties": {
            "backgroundImage": "https://oaxaca.eluniversal.com.mx/sites/default/files/styles/detalle_nota_1080x666_v22/public/2022/07/12/oaxaca_world_travel_awards.jpg?itok=cu0t2Sys",
            "displayFullscreen": false,
            "headerTitle": "DESCRIPCION",
            "headerSubtitle": "",
            "logoUrl": "https://seeklogo.com/images/O/oaxaca-gobierno-del-estado-logo-D127C58E05-seeklogo.com.png",
            "videoControlType": "skip",
            "videoSources": [
                "https://telesecundaria763.host8b.me/VIDEOS/Oaxaca.mp4",
                "https://d2o906d8ln7ui1.cloudfront.net/videos/AdobeStock_292807382.mov"
            ],
            "sliderType": "determinate"
        }
    }
};

const createDirectivePayload22 = (aplDocumentId, dataSources = {}, tokenId = "documentToken") => {
    return {
        type: "Alexa.Presentation.APL.RenderDocument",
        token: tokenId,
        document: {
            type: "Link",
            src: "doc://alexa/apl/documents/" + aplDocumentId
        },
        datasources: dataSources
    }
};


const LugaresTuristicosIntentHandler = {//funcion de lugares turisticos*********************************************
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'LugaresTuristicosIntent';
    },
    handle(handlerInput) {
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const speakOutput = requestAttributes.t('LUGARES_TURISTICOS');
        
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            const aplDirective = createDirectivePayload2(DOCUMENT_ID2, datasource2);
            handlerInput.responseBuilder.addDirective(aplDirective);
        }

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const DOCUMENT_ID2 = "LugaresTuristicosAPL";

const datasource2 = {
    "gridListData": {
        "type": "object",
        "objectId": "gridListSample",
        "backgroundImage": {
            "contentDescription": null,
            "smallSourceUrl": null,
            "largeSourceUrl": null,
            "sources": [
                {
                    "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKJMue5drA8bjQ9bgh9SdXVUPIy3kt4ipQgg&s",
                    "size": "small",
                    "widthPixels": 0,
                    "heightPixels": 0
                },
                {
                    "url": "https://d2o906d8ln7ui1.cloudfront.net/images/templates_v3/gridlist/GridListBackground_Dark.png",
                    "size": "large",
                    "widthPixels": 0,
                    "heightPixels": 0
                }
            ]
        },
        "title": "Lugares Turisticos",
        "listItems": [
            {
                "primaryText": "Zócalo de Oaxaca",
                "imageSource": "https://oaxaca.eluniversal.com.mx/sites/default/files/styles/detalle_nota_1080x666_v22/public/2021/12/15/postal-oaxaca-navidad.jpg?itok=_k2aSv_i"
            },
            {
                "primaryText": "Templo de Santo Domingo de Guzmán",
                "imageSource": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBX-Rf2N9U3BlsetOSB83p2tLyzakUG8q5cQ&s"
            },
            {
                "primaryText": "Monte Albán",
                "imageSource": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/c0/84/eb/vista-monte-alban.jpg?w=1200&h=1200&s=1"
            },
            {
                "primaryText": "Hierve el Agua",
                "imageSource": "https://www.mexicodesconocido.com.mx/wp-content/uploads/2018/02/1_Hierve-el-Agua-Oaxaca-Fotolia_128693009_Subscription_Monthly_XXL.jpg"
            },
            {
                "primaryText": "Mitla",
                "imageSource": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQScYYMqy1Y2SO1nEnNrXqwsbgCCw6YwP50w&s"
            },
            {
                "primaryText": "Teotitlán del Valle",
                "imageSource": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_FUjUSPZnuGBHYN_s6b6qyi-xgHG7Y7DZFNiHwPRnniKx3LXfoYB1Q15E_GtlSvQLqH0&usqp=CAU"
            }
        ],
        "logoUrl": "https://seeklogo.com/images/O/oaxaca-gobierno-del-estado-logo-D127C58E05-seeklogo.com.png"
    }
};

const createDirectivePayload2 = (aplDocumentId, dataSources = {}, tokenId = "documentToken") => {
    return {
        type: "Alexa.Presentation.APL.RenderDocument",
        token: tokenId,
        document: {
            type: "Link",
            src: "doc://alexa/apl/documents/" + aplDocumentId
        },
        datasources: dataSources
    }
}; // *************************+++ funciones de lugares Turisticos


const ComidaTipicaIntentHandler = {// COMIDA TIPICA DE Oaxaca
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'ComidaTipicaIntent';
    },
    handle(handlerInput) {
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const speakOutput = requestAttributes.t('COMIDA_TIPICA');
        
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            const aplDirective = createDirectivePayload3(DOCUMENT_ID3, datasource3);
            handlerInput.responseBuilder.addDirective(aplDirective);
        }

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const DOCUMENT_ID3 = "ComidaTipicaAPL";

const datasource3 = {
    "imageListData": {
        "type": "object",
        "objectId": "imageListSample",
        "backgroundImage": {
            "contentDescription": null,
            "smallSourceUrl": null,
            "largeSourceUrl": null,
            "sources": [
                {
                    "url": "https://i.pinimg.com/736x/2f/fc/db/2ffcdb91174a4bbafc62d7b2c5de0056.jpg",
                    "size": "large"
                }
            ]
        },
        "title": "COMIDA TIPICA",
        "listItems": [
            {
                "primaryText": "Mole Oaxaqueño",
                "imageSource": "https://i.blogs.es/fff946/mole-negro-oaxaca-receta-de-la-cocina-tradicional-mexicana/840_560.jpg"
            },
            {
                "primaryText": "Tlayudas",
                "imageSource": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsvt-3HYSy91umqYmJbUQVJQKSUFykTMXJWA&s"
            },
            {
                "primaryText": "Tamales Oaxaqueños",
                "imageSource": "https://vivirmejor.mx/wp-content/uploads/2021/10/tamales-oaxaquen%CC%83os.jpg"
            },
            {
                "primaryText": "Chapulines",
                "imageSource": "https://www.sabermas.umich.mx/images/stories/60/ARTICULO3D.jpg"
            },
            {
                "primaryText": "Quesillo",
                "imageSource": "https://www.mexicodesconocido.com.mx/wp-content/uploads/2020/03/queso-oaxaca.jpg"
            },
            {
                "primaryText": "Chocolate Oaxaqueño",
                "imageSource": "https://oaxacademiparati.com/wp-content/uploads/2020/12/ChocolateOaxaqueno.png"
            },
            {
                "primaryText": "Enchiladas Oaxaqueñas",
                "imageSource": "https://villacasona.mx/wp-content/uploads/2022/02/enchiladas-oaxaquen%CC%83as.jpg"
            }
        ],
        "logoUrl": "https://seeklogo.com/images/O/oaxaca-gobierno-del-estado-logo-D127C58E05-seeklogo.com.png",
        "hintText": ""
    }
};

const createDirectivePayload3 = (aplDocumentId, dataSources = {}, tokenId = "documentToken") => {
    return {
        type: "Alexa.Presentation.APL.RenderDocument",
        token: tokenId,
        document: {
            type: "Link",
            src: "doc://alexa/apl/documents/" + aplDocumentId
        },
        datasources: dataSources
    }
}; // hasta aqui termina lo de comida TIPICA


const TrajeTipicoIntentHandler = { // TRAJE TIPICO DE OAXACA ********************************************************************************
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'TrajeTipicoIntent';
    },
    handle(handlerInput) {
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const speakOutput = requestAttributes.t('TRAJE_TIPICO');
        
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            const aplDirective = createDirectivePayload4(DOCUMENT_ID4, datasource4);
            handlerInput.responseBuilder.addDirective(aplDirective);
        }

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const DOCUMENT_ID4 = "TrajeTipicoAPL";

const datasource4 = {
    "simpleTextTemplateData": {
        "type": "object",
        "properties": {
            "backgroundImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcU3GI8wxz6ahw2sRc4ybPmP97ohSkwhLJlw&s",
            "foregroundImageLocation": "right",
            "foregroundImageSource": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Vestido_tehuana.jpg/640px-Vestido_tehuana.jpg",
            "headerTitle": "TRAJE TIPICO DE OAXACA",
            "headerSubtitle": "",
            "hintText": "Prueba a decir, \"Alexa, cuáles son las comidas tipicas de Oaxaca\"",
            "headerAttributionImage": "https://seeklogo.com/images/O/oaxaca-gobierno-del-estado-logo-D127C58E05-seeklogo.com.png",
            "primaryText": " El traje más típico y reconocido de Oaxaca es el Traje de Tehuana. Este traje es emblemático de la región y consiste en una blusa bordada llamada huipil, una falda larga plisada conocida como enredo, un chal de lana llamado quechquemitl y un cinturón anudado a la cintura. Es usado principalmente por mujeres y es símbolo de la identidad cultural de Oaxaca, especialmente en las regiones del Istmo de Tehuantepec.",
            "textAlignment": "start",
            "titleText": "Traje de Tehuana"
        }
    }
};

const createDirectivePayload4 = (aplDocumentId, dataSources = {}, tokenId = "documentToken") => {
    return {
        type: "Alexa.Presentation.APL.RenderDocument",
        token: tokenId,
        document: {
            type: "Link",
            src: "doc://alexa/apl/documents/" + aplDocumentId
        },
        datasources: dataSources
    }
};


const PersonajesIntentHandler = { // funcion de los personjes mas sobresalientes de la ciudad de oaxaca   // PERSONAJES SOBRESALIENTES DE OAXACA ********************************
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'PersonajesIntent';
    },
    handle(handlerInput) {
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const speakOutput = requestAttributes.t('PERSONAJES_SOBRESALIENTES');
        
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            const aplDirective = createDirectivePayload5(DOCUMENT_ID5, datasource5);
            handlerInput.responseBuilder.addDirective(aplDirective);
        }

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const DOCUMENT_ID5 = "PersonajesAPL";

const datasource5 = {
    "imageListData": {
        "type": "object",
        "objectId": "imageListSample",
        "backgroundImage": {
            "contentDescription": null,
            "smallSourceUrl": null,
            "largeSourceUrl": null,
            "sources": [
                {
                    "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN5UDPQjzf6QCSYL85fs-hch2Y56C77y3e-GuhPR_plIzYx2w5RqF7ARBGKI98T7OUCg&usqp=CAU",
                    "size": "large"
                }
            ]
        },
        "title": "PERSONAJES SOBRESALIENTES",
        "listItems": [
            {
                "primaryText": "Benito Juárez",
                "imageSource": "https://c.files.bbci.co.uk/2B3F/production/_125917011_gettyimages-640480985.jpg"
            },
            {
                "primaryText": "Rufino Tamayo",
                "imageSource": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMqI0s2TXSskFWNYgCFlUYLghgcAGshHnPeg&s"
            },
            {
                "primaryText": "José Vasconcelos",
                "imageSource": "https://upload.wikimedia.org/wikipedia/commons/6/60/Jose_Vasconcelos_portriat_c.1920s.jpg"
            },
            {
                "primaryText": "Álvaro Carrillo",
                "imageSource": "https://www.infobae.com/new-resizer/293LyMMDuhqGLIaBF-HCjqHHw6Y=/1200x900/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/UAFMKX5DJNDALA223AY2AJVYS4.jpg"
            },
            {
                "primaryText": "Lila Downs",
                "imageSource": "https://cdn2.excelsior.com.mx/media/pictures/2023/08/26/2997142.jpg"
            }
        ],
        "logoUrl": "https://seeklogo.com/images/O/oaxaca-gobierno-del-estado-logo-D127C58E05-seeklogo.com.png",
        "hintText": "Prueba \"Alexa, reproduce música tradicional de oaxaca\""
    }
};

const createDirectivePayload5 = (aplDocumentId, dataSources = {}, tokenId = "documentToken") => {
    return {
        type: "Alexa.Presentation.APL.RenderDocument",
        token: tokenId,
        document: {
            type: "Link",
            src: "doc://alexa/apl/documents/" + aplDocumentId
        },
        datasources: dataSources
    }
}; // aqui termina la funcion de personajes sobresalientes ******************************


const MusicaTradicionalIntentHandler = { // funcion de los personjes mas sobresalientes de la ciudad de oaxaca   // FUNCION PARA LA MUSICA TIPICA DE oaxaca
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'MusicaTradicionalIntent';
    },
    handle(handlerInput) {
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const speakOutput = requestAttributes.t('MUSICA_TRADICIONAL');
        
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            const aplDirective = createDirectivePayload10(DOCUMENT_ID10, datasource10);
            handlerInput.responseBuilder.addDirective(aplDirective);
        }

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const DOCUMENT_ID10 = "MusicaTradicionalAPL";

const datasource10 = {
    "audioPlayerTemplateData": {
        "type": "object",
        "properties": {
            "audioControlType": "jump10",
            "audioSources": [
                "https://telesecundaria763.host8b.me/VIDEOS/Flor_de_pi%C3%B1a.m4a",
                "https://telesecundaria763.host8b.me/VIDEOS/Flor_de_pi%C3%B1a.m4a"
            ],
            "backgroundImage": "https://img.freepik.com/fotos-premium/frutos-pina-cultivo-pina-fondo-amanecer_994641-4142.jpg",
            "coverImageSource": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPDMHh7XxOyP1PmCUWw38w9wBiLTVuBINAew&s",
            "headerTitle": "MUSICA TRADICIONAL",
            "logoUrl": "https://seeklogo.com/images/O/oaxaca-gobierno-del-estado-logo-D127C58E05-seeklogo.com.png",
            "primaryText": "Flor de Piña",
            "secondaryText": "Baile Folklórico Guelaguetza",
            "sliderType": "determinate"
        }
    }
};

const createDirectivePayload10 = (aplDocumentId, dataSources = {}, tokenId = "documentToken") => {
    return {
        type: "Alexa.Presentation.APL.RenderDocument",
        token: tokenId,
        document: {
            type: "Link",
            src: "doc://alexa/apl/documents/" + aplDocumentId
        },
        datasources: dataSources
    }
}; // AQUI TERMINA LA FUNCIONES DE MUSICA


// LAS FUNCIONES POR DEFECTO DE ALEXA

const HelloWorldIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'HelloWorldIntent';
    },
    handle(handlerInput) {
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const speakOutput = requestAttributes.t('HOLA_MUNDO');
        
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};


const HelpIntentHandler = {// FUNCION DE AYUDA ****************************************************************
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const frasesArray = requestAttributes.t('FRASES_DATA');
        
        const frasesIndice = Math.floor(Math.random() * frasesArray.length);
        const randomFrase = frasesArray[frasesIndice];
        
        const speakOutput = `${requestAttributes.t('HELP_MESSAGE')} ${randomFrase}`;
        
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            const aplDirective = createDirectivePayload6(DOCUMENT_ID6, datasource6);
            handlerInput.responseBuilder.addDirective(aplDirective);
        }

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const DOCUMENT_ID6 = "HelpAPL";

const datasource6 = {
    "textListData": {
        "type": "object",
        "objectId": "textListSample",
        "backgroundImage": {
            "contentDescription": null,
            "smallSourceUrl": null,
            "largeSourceUrl": null,
            "sources": [
                {
                    "url": "https://cdn.wallpapersafari.com/79/12/zGqr2s.png",
                    "size": "large"
                }
            ]
        },
        "title": "AYUDA",
        "listItems": [
            {
                "primaryText": "Alexa, cuáles son los lugares turísticos de oaxaca"
            },
            {
                "primaryText": "Alexa, cuáles son las comidas tipicas de Oaxaca"
            },
            {
                "primaryText": "Alexa, cuáles son las comidas tipicas de Oaxaca"
            },
            {
                "primaryText": "Alexa, cuáles son los personajes más sobresalientes de oaxaca"
            },
            {
                "primaryText": "Alexa, reproduce música tradicional de oaxaca"
            },
            {
                "primaryText": "Alexa, descríbeme la ciudad de oaxaca."
            }
        ],
        "logoUrl": "https://seeklogo.com/images/O/oaxaca-gobierno-del-estado-logo-D127C58E05-seeklogo.com.png"
    }
};

const createDirectivePayload6 = (aplDocumentId, dataSources = {}, tokenId = "documentToken") => {
    return {
        type: "Alexa.Presentation.APL.RenderDocument",
        token: tokenId,
        document: {
            type: "Link",
            src: "doc://alexa/apl/documents/" + aplDocumentId
        },
        datasources: dataSources
    }
}; // AQUI TERMINA LA FUNCION DE AYUDA


const CancelAndStopIntentHandler = { // FUNCION DE CANCEL
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && (Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.CancelIntent'
                || Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const speakOutput = requestAttributes.t('GOODBYE_MESSAGE');
        
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            const aplDirective = createDirectivePayload9(DOCUMENT_ID9, datasource9);
            handlerInput.responseBuilder.addDirective(aplDirective);
        }

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};

const DOCUMENT_ID9 = "CancelAPL";

const datasource9 = {
    "headlineTemplateData": {
        "type": "object",
        "objectId": "headlineSample",
        "properties": {
            "backgroundImage": {
                "contentDescription": null,
                "smallSourceUrl": null,
                "largeSourceUrl": null,
                "sources": [
                    {
                        "url": "https://www.gob.mx/cms/uploads/article/main_image/100678/Boda__en_santo_domingo__9__2.jpg",
                        "size": "large"
                    }
                ]
            },
            "textContent": {
                "primaryText": {
                    "type": "PlainText",
                    "text": "¡Adiós!, Gracias por usar Curiosidades de Oaxaca"
                }
            },
            "logoUrl": "https://seeklogo.com/images/O/oaxaca-gobierno-del-estado-logo-D127C58E05-seeklogo.com.png",
            "hintText": "Desarrollado por Eduardo Hdez Hdez 20210681"
        }
    }
};

const createDirectivePayload9 = (aplDocumentId, dataSources = {}, tokenId = "documentToken") => {
    return {
        type: "Alexa.Presentation.APL.RenderDocument",
        token: tokenId,
        document: {
            type: "Link",
            src: "doc://alexa/apl/documents/" + aplDocumentId
        },
        datasources: dataSources
    }
}; // AQUI TERMINA LO DE CANCEL


const FallbackIntentHandler = { //FallbackIntent
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.FallbackIntent';
    },
    handle(handlerInput) {
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const speakOutput = requestAttributes.t('FALLBACK_MESSAGE');
        
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            const aplDirective = createDirectivePayload8(DOCUMENT_ID8, datasource8);
            handlerInput.responseBuilder.addDirective(aplDirective);
        }

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};


const DOCUMENT_ID8 = "FallbackAPL";

const datasource8 = {
    "headlineTemplateData": {
        "type": "object",
        "objectId": "headlineSample",
        "properties": {
            "backgroundImage": {
                "contentDescription": null,
                "smallSourceUrl": null,
                "largeSourceUrl": null,
                "sources": [
                    {
                        "url": "https://imparcialoaxaca.mx/wp-content/uploads/2020/02/Oaxaca-de-noche-.jpg",
                        "size": "large"
                    }
                ]
            },
            "textContent": {
                "primaryText": {
                    "type": "PlainText",
                    "text": "Lo siento, no sé sobre eso. Inténtalo de nuevo."
                }
            },
            "logoUrl": "https://seeklogo.com/images/O/oaxaca-gobierno-del-estado-logo-D127C58E05-seeklogo.com.png",
            "hintText": "Prueba, \"Alexa, petición o solicitud específica\""
        }
    }
};

const createDirectivePayload8 = (aplDocumentId, dataSources = {}, tokenId = "documentToken") => {
    return {
        type: "Alexa.Presentation.APL.RenderDocument",
        token: tokenId,
        document: {
            type: "Link",
            src: "doc://alexa/apl/documents/" + aplDocumentId
        },
        datasources: dataSources
    }
}; // aqui termina las funciones de FallbackAPL


const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        console.log(`~~~~ Session ended: ${JSON.stringify(handlerInput.requestEnvelope)}`);
        return handlerInput.responseBuilder.getResponse(); // notice we send an empty response
    }
};

const IntentReflectorHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest';
    },
    handle(handlerInput) {
        const intentName = Alexa.getIntentName(handlerInput.requestEnvelope);
        const speakOutput = `You just triggered ${intentName}`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};

const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const speakOutput = requestAttributes.t('ERROR_MESSAGE');

        console.log(`~~~~ Error handled: ${JSON.stringify(error)}`);
        
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']) {
            const aplDirective = createDirectivePayload7(DOCUMENT_ID7, datasource7);
            handlerInput.responseBuilder.addDirective(aplDirective);
        }

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const DOCUMENT_ID7 = "ErrorAPL";

const datasource7 = {
    "headlineTemplateData": {
        "type": "object",
        "objectId": "headlineSample",
        "properties": {
            "backgroundImage": {
                "contentDescription": null,
                "smallSourceUrl": null,
                "largeSourceUrl": null,
                "sources": [
                    {
                        "url": "https://st4.depositphotos.com/1069957/19980/i/450/depositphotos_199807442-stock-photo-word-error-binary-computer-code.jpg",
                        "size": "large"
                    }
                ]
            },
            "textContent": {
                "primaryText": {
                    "type": "PlainText",
                    "text": "Lo siento, tuve problemas para hacer lo que me pediste. Inténtalo de nuevo."
                }
            },
            "logoUrl": "https://seeklogo.com/images/O/oaxaca-gobierno-del-estado-logo-D127C58E05-seeklogo.com.png",
            "hintText": "Prueba, \"Alexa, cuáles son los lugares turísticos de oaxaca?\""
        }
    }
};

const createDirectivePayload7 = (aplDocumentId, dataSources = {}, tokenId = "documentToken") => {
    return {
        type: "Alexa.Presentation.APL.RenderDocument",
        token: tokenId,
        document: {
            type: "Link",
            src: "doc://alexa/apl/documents/" + aplDocumentId
        },
        datasources: dataSources
    }
};

 //PRIMERA FUNCION AGREGADA
const LoggingRequestInterceptor = {
    process(handlerInput) {
        console.log(`Incoming request: ${JSON.stringify(handlerInput.requestEnvelope.request)}`);
    }
};

//SEGUNDA FUNCION AGREGADA
const LoggingResponseInterceptor = {
    process(handlerInput, response) {
      console.log(`Outgoing response: ${JSON.stringify(response)}`);
    }
};

//TERCERA FUNCION AGREGADA
const LocalizationInterceptor = {
  process(handlerInput) {
    const localizationClient = i18n.use(sprintf).init({
      lng: handlerInput.requestEnvelope.request.locale,
      fallbackLng: 'en',
      overloadTranslationOptionHandler: sprintf.overloadTranslationOptionHandler,
      resources: languageStrings,
      returnObjects: true
    });

    const attributes = handlerInput.attributesManager.getRequestAttributes();
    attributes.t = function (...args) {
      return localizationClient.t(...args);
    }
  }
}
 
exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,
        DescripcionIntentHandler,
        HelloWorldIntentHandler,
        LugaresTuristicosIntentHandler,
        ComidaTipicaIntentHandler,
        TrajeTipicoIntentHandler,
        PersonajesIntentHandler,
        MusicaTradicionalIntentHandler,
        HelpIntentHandler,
        CancelAndStopIntentHandler,
        FallbackIntentHandler,
        SessionEndedRequestHandler,
        IntentReflectorHandler)
    .addErrorHandlers(
        ErrorHandler)
    .addRequestInterceptors(
        LocalizationInterceptor,
        LoggingRequestInterceptor)
    .addResponseInterceptors(
        LoggingResponseInterceptor)
    .withCustomUserAgent('sample/hello-world/v1.2')
    .lambda();