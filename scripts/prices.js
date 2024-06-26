// import json from './public/prices.json' assert { type: 'json' };

const json = {
    "Prices": 
    [
        {
            "name": "Генеральная уборка",
            "classes": 
            [
                {
                    "class": "general"
                }
            ],
            "prefix": "от",
            "price": 1000,
            "suffix": "₽/час",
            "details": ""
        },
        {
            "name": "Уборка после ремонта без мебели",
            "classes": 
            [
                {
                    "class": "repairs"
                }
            ],
            "prefix": "от",
            "price": 140,
            "suffix": "₽/м<sup>2</sup>",
            "details": ""
        },
        {
            "name": "Уборка после ремонта с мебелью",
            "classes": 
            [
                {
                    "class": "repairs"
                }
            ],
            "prefix": "от",
            "price": 190,
            "suffix": "₽/м<sup>2</sup>",
            "details": ""
        },
        {
            "name": "Мойка окон после ремонта",
            "classes": 
            [
                {
                    "class": "repairs"
                },
                {
                    "class": "windows"
                }
            ],
            "prefix": "от",
            "price": 350,
            "suffix": "₽<br>/створка",
            "details": ""
        },
        {
            "name": "Сезонное мытьё окон",
            "classes": 
            [
                {
                    "class": "windows"
                }
            ],
            "prefix": "от",
            "price": 250,
            "suffix": "₽<br>/створка",
            "details": ""
        },
        {
            "name": "Мойка нестандартных окон/витражей",
            "classes": 
            [
                {
                    "class": "windows"
                }
            ],
            "prefix": "от",
            "price": 450,
            "suffix": "₽<br>/створка",
            "details": ""
        },
        {
            "name": "Влажная уборка",
            "classes": 
            [
                {
                    "class": "maintenance"
                }
            ],
            "prefix": "от",
            "price": 40,
            "suffix": "₽/м<sup>2</sup>",
            "details": ""
        },
        {
            "name": "Поддерживающая уборка до 40 м<sup>2</sup>",
            "classes": 
            [
                {
                    "class": "maintenance"
                }
            ],
            "prefix": "от",
            "price": 2500,
            "suffix": "₽",
            "details": "Поддерживающая уборка производится после нашей генеральной уборки. Убираем с периодичностью 1 раз в 1-2 недели, используя Ваш пылесос. Если его нет, то привезём за +500 ₽ к стоимости уборки."
        },
        {
            "name": "Поддерживающая уборка на 40-60 м<sup>2</sup>",
            "classes": 
            [
                {
                    "class": "maintenance"
                }
            ],
            "prefix": "от",
            "price": 3000,
            "suffix": "₽",
            "details": "Поддерживающая уборка производится после нашей генеральной уборки. Убираем с периодичностью 1 раз в 1-2 недели, используя Ваш пылесос. Если его нет, то привезём за +500 ₽ к стоимости уборки."
        },
        {
            "name": "Поддерживающая уборка на 60-80 м<sup>2</sup>",
            "classes": 
            [
                {
                    "class": "maintenance"
                }
            ],
            "prefix": "от",
            "price": 3500,
            "suffix": "₽",
            "details": "Поддерживающая уборка производится после нашей генеральной уборки. Убираем с периодичностью 1 раз в 1-2 недели, используя Ваш пылесос. Если его нет, то привезём за +500 ₽ к стоимости уборки."
        },
        {
            "name": "Поддерживающая уборка на 80-100 м<sup>2</sup>",
            "classes": 
            [
                {
                    "class": "maintenance"
                }
            ],
            "prefix": "от",
            "price": 4000,
            "suffix": "₽",
            "details": "Поддерживающая уборка производится после нашей генеральной уборки. Убираем с периодичностью 1 раз в 1-2 недели, используя Ваш пылесос. Если его нет, то привезём за +500 ₽ к стоимости уборки."
        },
        {
            "name": "Поддерживающая уборка на 100 м<sup>2</sup> и более",
            "classes": 
            [
                {
                    "class": "maintenance"
                }
            ],
            "prefix": "от",
            "price": 4500,
            "suffix": "₽",
            "details": "Поддерживающая уборка производится после нашей генеральной уборки. Убираем с периодичностью 1 раз в 1-2 недели, используя Ваш пылесос. Если его нет, то привезём за +500 ₽ к стоимости уборки."
        },
        {
            "name": "Кресло, химчистка",
            "classes": 
            [
                {
                    "class": "laundery"
                }
            ],
            "prefix": "от",
            "price": 700,
            "suffix": "₽",
            "details": ""
        },
        {
            "name": "Стул, химчистка",
            "classes": 
            [
                {
                    "class": "laundery"
                }
            ],
            "prefix": "от",
            "price": 250,
            "suffix": "₽",
            "details": ""
        },
        {
            "name": "Кресло-кровать, химчистка",
            "classes": 
            [
                {
                    "class": "laundery"
                }
            ],
            "prefix": "от",
            "price": 1500,
            "suffix": "₽",
            "details": ""
        },
        {
            "name": "Диван 2-х местный, химчистка",
            "classes": 
            [
                {
                    "class": "laundery"
                }
            ],
            "prefix": "от",
            "price": 2500,
            "suffix": "₽",
            "details": "Длина до 1,5 м."
        },
        {
            "name": "Диван 3-х местный, химчистка",
            "classes": 
            [
                {
                    "class": "laundery"
                }
            ],
            "prefix": "от",
            "price": 3000,
            "suffix": "₽",
            "details": "Длина до 2 м."
        },
        {
            "name": "Угловой диван небольшой, химчистка",
            "classes": 
            [
                {
                    "class": "laundery"
                }
            ],
            "prefix": "от",
            "price": 3800,
            "suffix": "₽",
            "details": "Длина до 2 м."
        },
        {
            "name": "Угловой диван средний, химчистка",
            "classes": 
            [
                {
                    "class": "laundery"
                }
            ],
            "prefix": "от",
            "price": 4000,
            "suffix": "₽",
            "details": "Длина до 3 м."
        },
        {
            "name": "Матрас детский, химчистка",
            "classes": 
            [
                {
                    "class": "laundery"
                }
            ],
            "prefix": "",
            "price": 2000,
            "suffix": "₽",
            "details": "Чистим с двух сторон."
        },
        {
            "name": "Матрас 1,5-спальный, химчистка",
            "classes": 
            [
                {
                    "class": "laundery"
                }
            ],
            "prefix": "от",
            "price": 2500,
            "suffix": "₽",
            "details": "Чистим с двух сторон."
        },
        {
            "name": "Матрас 2-спальный средний, химчистка с одной стороны",
            "classes": 
            [
                {
                    "class": "laundery"
                }
            ],
            "prefix": "",
            "price": 2000,
            "suffix": "₽",
            "details": "Ширина 140 − 160 см."
        },
        {
            "name": "Матрас 2-спальный средний, химчистка с двух сторон",
            "classes": 
            [
                {
                    "class": "laundery"
                }
            ],
            "prefix": "",
            "price": 4000,
            "suffix": "₽",
            "details": "Ширина 140 − 160 см."
        },
        {
            "name": "Матрас 2-спальный большой, химчистка с одной стороны",
            "classes": 
            [
                {
                    "class": "laundery"
                }
            ],
            "prefix": "",
            "price": 2500,
            "suffix": "₽",
            "details": "Ширина 180 - 220 см."
        },
        {
            "name": "Матрас 2-спальный большой, химчистка с двух сторон",
            "classes": 
            [
                {
                    "class": "laundery"
                }
            ],
            "prefix": "",
            "price": 4500,
            "suffix": "₽",
            "details": "Ширина 180 - 220 см."
        },
        {
            "name": "Портьеры, химчистка на весу",
            "classes": 
            [
                {
                    "class": "laundery"
                }
            ],
            "prefix": "от",
            "price": 280,
            "suffix": "₽/м<sup>2</sup>",
            "details": ""
        },
        {
            "name": "Тюль, химчистка на весу",
            "classes": 
            [
                {
                    "class": "laundery"
                }
            ],
            "prefix": "от",
            "price": 200,
            "suffix": "₽/м<sup>2</sup>",
            "details": ""
        },
        {
            "name": "Духовой шкаф внутри",
            "classes": 
            [
                {
                    "class": "kitchen"
                }
            ],
            "prefix": "от",
            "price": 1000,
            "suffix": "₽/час",
            "details": "Цена за 1ый час, второй и последующие: 600 ₽/час."
        },
        {
            "name": "Холодильник внутри",
            "classes": 
            [
                {
                    "class": "kitchen"
                }
            ],
            "prefix": "",
            "price": 600,
            "suffix": "₽/час",
            "details": ""
        },
        {
            "name": "Микроволновка внутри",
            "classes": 
            [
                {
                    "class": "kitchen"
                }
            ],
            "prefix": "",
            "price": 500,
            "suffix": "₽",
            "details": ""
        },
        {
            "name": "Посудомойка внутри",
            "classes": 
            [
                {
                    "class": "kitchen"
                }
            ],
            "prefix": "от",
            "price": 900,
            "suffix": "₽",
            "details": ""
        },
        {
            "name": "Шкафчики внутри кухни",
            "classes": 
            [
                {
                    "class": "kitchen"
                }
            ],
            "prefix": "от",
            "price": 200,
            "suffix": "₽/шт",
            "details": ""
        },
        {
            "name": "Глубокая чистка полов/швов",
            "classes": 
            [
                {
                    "class": "kitchen"
                }
            ],
            "prefix": "от",
            "price": 150,
            "suffix": "₽/м<sup>2</sup>",
            "details": "Длина до 2 м."
        },
        {
            "name": "Мытьё жалюзи",
            "classes": 
            [
                {
                    "class": "rooms"
                }
            ],
            "prefix": "от",
            "price": 350,
            "suffix": "₽/м<sup>2</sup>",
            "details": ""
        },
        {
            "name": "Мытьё потолков",
            "classes": 
            [
                {
                    "class": "rooms"
                }
            ],
            "prefix": "",
            "price": 150,
            "suffix": "₽/м<sup>2</sup>",
            "details": ""
        },
        {
            "name": "Очистка сложных люстр",
            "classes": 
            [
                {
                    "class": "rooms"
                }
            ],
            "prefix": "от",
            "price": 1000,
            "suffix": "₽",
            "details": "С большим количеством мелких деталей."
        },
        {
            "name": "Стирка штор/тюля",
            "classes": 
            [
                {
                    "class": "rooms"
                }
            ],
            "prefix": "от",
            "price": 500,
            "suffix": "₽",
            "details": "В стоимость входит снять, постирать, повесить шторы обратно."
        },
        {
            "name": "Глажка белья",
            "classes": 
            [
                {
                    "class": "rooms"
                }
            ],
            "prefix": "от",
            "price": 500,
            "suffix": "₽/час",
            "details": ""
        },
        {
            "name": "Заехать за ключами в Адлер",
            "classes": 
            [
                {
                    "class": ""
                }
            ],
            "prefix": "",
            "price": 500,
            "suffix": "₽",
            "details": ""
        },
        {
            "name": "Заехать за ключами в Сочи или Красную Поляну",
            "classes": 
            [
                {
                    "class": ""
                }
            ],
            "prefix": "",
            "price": 1200,
            "suffix": "₽",
            "details": ""
        }
    ]
}

let priceList = document.getElementById("priceList");

for (price of json.Prices) {
    let clss = '';
    for (value of price.classes){
        if (value.class != '') {
            clss += value.class + ' ';
        };
    };

    var div = document.createElement('div');
    div.setAttribute('class', `tile ${clss} list-item`);

    var text = '';
    text = `
        <div class="flex-space">
            <div class="price-name text-accent">
                ${price.name}
            </div>
            <div class="price text-accent">
        `;

    if (price.prefix != ''){
        text += (`        <small>
                    ${price.prefix}
                </small>   
        `);
    };

    text += (`        ${price.price}`);
    
    if (price.suffix != ''){
        text += (`<small> ${price.suffix}</small>
                </div>
            </div>
        `);
    };

    if (price.details != ''){
        text += (`
            <div class="details">
                ${price.details}
            </div>
        `);
    };
    div.innerHTML = text;
    priceList.appendChild(div);
}
