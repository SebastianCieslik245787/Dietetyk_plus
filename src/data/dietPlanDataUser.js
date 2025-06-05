export const dietPlanData = [
    // ----- DZIEŃ 1 -----
    [
        {
            name: "Śniadanie",
            meal: {
                name: "Owsianka mocy z odżywką białkową i owocami",
                img_b64: "",
                ingredients: [
                    {
                        name: "Płatki owsiane górskie",
                        count: 100,
                        unit: "g",
                        macros: { kcal: 370, proteins: 12, carbohydrates: 62, fats: 7, fiber: 10, sugar: 1 }
                    },
                    {
                        name: "Odżywka białkowa (np. WPC)",
                        count: 30,
                        unit: "g",
                        macros: { kcal: 120, proteins: 24, carbohydrates: 2, fats: 2, fiber: 0, sugar: 1 }
                    },
                    {
                        name: "Mleko 2%",
                        count: 250,
                        unit: "ml",
                        macros: { kcal: 125, proteins: 8, carbohydrates: 12, fats: 5, fiber: 0, sugar: 12 }
                    },
                    {
                        name: "Banan",
                        count: 1,
                        unit: "szt (ok. 120g)",
                        macros: { kcal: 105, proteins: 1, carbohydrates: 27, fats: 0.3, fiber: 3, sugar: 14 }
                    },
                    {
                        name: "Orzechy włoskie",
                        count: 20,
                        unit: "g",
                        macros: { kcal: 130, proteins: 3, carbohydrates: 3, fats: 12, fiber: 1, sugar: 0.5 }
                    }
                ],
                recipe: "Płatki owsiane ugotuj na mleku. Pod koniec gotowania dodaj odżywkę białkową i wymieszaj. Przełóż do miski, dodaj pokrojonego banana i posiekane orzechy."
            }
        },
        {
            name: "II Śniadanie",
            meal: {
                name: "Kanapki z twarogiem i warzywami",
                img_b64: "",
                ingredients: [
                    {
                        name: "Chleb pełnoziarnisty żytni",
                        count: 120,
                        unit: "g (ok. 3 kromki)",
                        macros: { kcal: 280, proteins: 8, carbohydrates: 50, fats: 3, fiber: 9, sugar: 4 }
                    },
                    {
                        name: "Twaróg chudy",
                        count: 150,
                        unit: "g",
                        macros: { kcal: 135, proteins: 27, carbohydrates: 5, fats: 0.5, fiber: 0, sugar: 5 }
                    },
                    {
                        name: "Rzodkiewka",
                        count: 50,
                        unit: "g",
                        macros: { kcal: 8, proteins: 0.3, carbohydrates: 1.7, fats: 0.1, fiber: 0.8, sugar: 1 }
                    },
                    {
                        name: "Szczypiorek",
                        count: 10,
                        unit: "g",
                        macros: { kcal: 3, proteins: 0.3, carbohydrates: 0.4, fats: 0.1, fiber: 0.3, sugar: 0.2 }
                    }
                ],
                recipe: "Twaróg wymieszaj z posiekaną rzodkiewką i szczypiorkiem, dopraw solą i pieprzem. Nałóż na kromki chleba."
            }
        },
        {
            name: "Obiad",
            meal: {
                name: "Pierś z kurczaka z ryżem brązowym i brokułami",
                img_b64: "",
                ingredients: [
                    {
                        name: "Pierś z kurczaka",
                        count: 200,
                        unit: "g",
                        macros: { kcal: 220, proteins: 44, carbohydrates: 0, fats: 4, fiber: 0, sugar: 0 }
                    },
                    {
                        name: "Ryż brązowy (suchy)",
                        count: 100,
                        unit: "g",
                        macros: { kcal: 350, proteins: 8, carbohydrates: 75, fats: 2.5, fiber: 3.5, sugar: 1 }
                    },
                    {
                        name: "Brokuły",
                        count: 200,
                        unit: "g",
                        macros: { kcal: 70, proteins: 5.6, carbohydrates: 14, fats: 0.6, fiber: 5, sugar: 3 }
                    },
                    {
                        name: "Oliwa z oliwek",
                        count: 10,
                        unit: "ml",
                        macros: { kcal: 90, proteins: 0, carbohydrates: 0, fats: 10, fiber: 0, sugar: 0 }
                    }
                ],
                recipe: "Pierś z kurczaka upiecz lub usmaż na niewielkiej ilości oliwy. Ryż ugotuj zgodnie z instrukcją. Brokuły ugotuj na parze. Podawaj razem."
            }
        },
        {
            name: "Kolacja",
            meal: {
                name: "Jajecznica na szpinaku z awokado",
                img_b64: "",
                ingredients: [
                    {
                        name: "Jaja kurze",
                        count: 4,
                        unit: "szt",
                        macros: { kcal: 280, proteins: 24, carbohydrates: 2, fats: 20, fiber: 0, sugar: 2 }
                    },
                    {
                        name: "Szpinak świeży",
                        count: 100,
                        unit: "g",
                        macros: { kcal: 23, proteins: 3, carbohydrates: 3.6, fats: 0.4, fiber: 2.2, sugar: 0.4 }
                    },
                    {
                        name: "Awokado",
                        count: 0.5,
                        unit: "szt (ok. 70g)",
                        macros: { kcal: 112, proteins: 1.4, carbohydrates: 6, fats: 10, fiber: 4.7, sugar: 0.5 }
                    },
                    {
                        name: "Cebula",
                        count: 30,
                        unit: "g",
                        macros: { kcal: 12, proteins: 0.3, carbohydrates: 2.8, fats: 0, fiber: 0.5, sugar: 1.4 }
                    }
                ],
                recipe: "Na patelni zeszklij posiekaną cebulę, dodaj szpinak i duś aż zwiędnie. Wbij jajka, smaż do uzyskania ulubionej konsystencji. Podawaj z pokrojonym awokado."
            }
        }
    ],
    // ----- DZIEŃ 2 -----
    [
        {
            name: "Śniadanie",
            meal: {
                name: "Koktajl białkowo-węglowodanowy",
                img_b64: "",
                ingredients: [
                    {
                        name: "Mleko krowie 2%",
                        count: 300,
                        unit: "ml",
                        macros: { kcal: 150, proteins: 10, carbohydrates: 15, fats: 6, fiber: 0, sugar: 15 }
                    },
                    {
                        name: "Banan",
                        count: 1,
                        unit: "szt (ok. 120g)",
                        macros: { kcal: 105, proteins: 1, carbohydrates: 27, fats: 0.3, fiber: 3, sugar: 14 }
                    },
                    {
                        name: "Płatki owsiane błyskawiczne",
                        count: 50,
                        unit: "g",
                        macros: { kcal: 185, proteins: 6, carbohydrates: 31, fats: 3.5, fiber: 5, sugar: 0.5 }
                    },
                    {
                        name: "Masło orzechowe",
                        count: 30,
                        unit: "g",
                        macros: { kcal: 180, proteins: 7.5, carbohydrates: 6, fats: 15, fiber: 2, sugar: 2 }
                    },
                    {
                        name: "Odżywka białkowa",
                        count: 30,
                        unit: "g",
                        macros: { kcal: 120, proteins: 24, carbohydrates: 2, fats: 2, fiber: 0, sugar: 1 }
                    }
                ],
                recipe: "Wszystkie składniki zmiksuj w blenderze na gładki koktajl."
            }
        },
        {
            name: "II Śniadanie",
            meal: {
                name: "Serek wiejski z owocami i orzechami",
                img_b64: "",
                ingredients: [
                    {
                        name: "Serek wiejski",
                        count: 200,
                        unit: "g",
                        macros: { kcal: 190, proteins: 22, carbohydrates: 6, fats: 9, fiber: 0, sugar: 6 }
                    },
                    {
                        name: "Jabłko",
                        count: 1,
                        unit: "szt (ok. 150g)",
                        macros: { kcal: 80, proteins: 0.4, carbohydrates: 21, fats: 0.3, fiber: 3.6, sugar: 15 }
                    },
                    {
                        name: "Migdały",
                        count: 20,
                        unit: "g",
                        macros: { kcal: 115, proteins: 4.2, carbohydrates: 4.3, fats: 9.9, fiber: 2.4, sugar: 0.9 }
                    }
                ],
                recipe: "Serek wiejski wymieszaj z pokrojonym jabłkiem i posiekanymi migdałami."
            }
        },
        {
            name: "Obiad",
            meal: {
                name: "Dorsz pieczony z batatami i zieloną fasolką",
                img_b64: "",
                ingredients: [
                    {
                        name: "Filet z dorsza",
                        count: 200,
                        unit: "g",
                        macros: { kcal: 164, proteins: 36, carbohydrates: 0, fats: 1.4, fiber: 0, sugar: 0 }
                    },
                    {
                        name: "Bataty (słodkie ziemniaki)",
                        count: 300,
                        unit: "g",
                        macros: { kcal: 258, proteins: 4.8, carbohydrates: 60, fats: 0.3, fiber: 9, sugar: 12.6 }
                    },
                    {
                        name: "Fasolka szparagowa zielona",
                        count: 150,
                        unit: "g",
                        macros: { kcal: 47, proteins: 2.7, carbohydrates: 10.5, fats: 0.3, fiber: 4, sugar: 5 }
                    },
                    {
                        name: "Oliwa z oliwek",
                        count: 10,
                        unit: "ml",
                        macros: { kcal: 90, proteins: 0, carbohydrates: 0, fats: 10, fiber: 0, sugar: 0 }
                    }
                ],
                recipe: "Dorsza skrop oliwą, dopraw ziołami i upiecz. Bataty pokrój w frytki, skrop oliwą, dopraw i upiecz. Fasolkę ugotuj na parze."
            }
        },
        {
            name: "Kolacja",
            meal: {
                name: "Sałatka z tuńczykiem, jajkiem i warzywami",
                img_b64: "",
                ingredients: [
                    {
                        name: "Tuńczyk w sosie własnym (odsączony)",
                        count: 130,
                        unit: "g (1 puszka)",
                        macros: { kcal: 140, proteins: 30, carbohydrates: 0, fats: 2, fiber: 0, sugar: 0 }
                    },
                    {
                        name: "Jaja kurze gotowane",
                        count: 2,
                        unit: "szt",
                        macros: { kcal: 140, proteins: 12, carbohydrates: 1, fats: 10, fiber: 0, sugar: 1 }
                    },
                    {
                        name: "Mix sałat",
                        count: 100,
                        unit: "g",
                        macros: { kcal: 15, proteins: 1.5, carbohydrates: 2, fats: 0.2, fiber: 1.5, sugar: 1 }
                    },
                    {
                        name: "Pomidor",
                        count: 1,
                        unit: "szt (ok. 150g)",
                        macros: { kcal: 27, proteins: 1.3, carbohydrates: 5.8, fats: 0.3, fiber: 1.8, sugar: 4 }
                    },
                    {
                        name: "Ogórek świeży",
                        count: 100,
                        unit: "g",
                        macros: { kcal: 15, proteins: 0.7, carbohydrates: 3.6, fats: 0.1, fiber: 0.5, sugar: 1.7 }
                    },
                    {
                        name: "Oliwa z oliwek",
                        count: 5,
                        unit: "ml",
                        macros: { kcal: 45, proteins: 0, carbohydrates: 0, fats: 5, fiber: 0, sugar: 0 }
                    }
                ],
                recipe: "Wszystkie składniki (oprócz oliwy) pokrój i wymieszaj w misce. Polej oliwą, dopraw solą i pieprzem."
            }
        }
    ],
    // ----- DZIEŃ 3 -----
    [
        {
            name: "Śniadanie",
            meal: {
                name: "Placki bananowe z odżywką białkową",
                img_b64: "",
                ingredients: [
                    {
                        name: "Banan dojrzały",
                        count: 1,
                        unit: "szt (ok. 120g)",
                        macros: { kcal: 105, proteins: 1, carbohydrates: 27, fats: 0.3, fiber: 3, sugar: 14 }
                    },
                    {
                        name: "Jaja kurze",
                        count: 2,
                        unit: "szt",
                        macros: { kcal: 140, proteins: 12, carbohydrates: 1, fats: 10, fiber: 0, sugar: 1 }
                    },
                    {
                        name: "Odżywka białkowa",
                        count: 30,
                        unit: "g",
                        macros: { kcal: 120, proteins: 24, carbohydrates: 2, fats: 2, fiber: 0, sugar: 1 }
                    },
                    {
                        name: "Mąka owsiana (lub zmielone płatki)",
                        count: 40,
                        unit: "g",
                        macros: { kcal: 150, proteins: 5, carbohydrates: 25, fats: 3, fiber: 4, sugar: 0.5 }
                    },
                    {
                        name: "Olej kokosowy (do smażenia)",
                        count: 5,
                        unit: "g",
                        macros: { kcal: 45, proteins: 0, carbohydrates: 0, fats: 5, fiber: 0, sugar: 0 }
                    }
                ],
                recipe: "Banana rozgnieć widelcem, dodaj jajka, odżywkę białkową i mąkę. Wymieszaj na gładką masę. Smaż małe placuszki na oleju kokosowym. Podawaj np. z jogurtem i owocami."
            }
        },
        {
            name: "II Śniadanie",
            meal: {
                name: "Jogurt grecki z miodem i płatkami migdałów",
                img_b64: "",
                ingredients: [
                    {
                        name: "Jogurt grecki naturalny",
                        count: 200,
                        unit: "g",
                        macros: { kcal: 190, proteins: 18, carbohydrates: 8, fats: 10, fiber: 0, sugar: 7 }
                    },
                    {
                        name: "Miód",
                        count: 15,
                        unit: "g (1 łyżka)",
                        macros: { kcal: 45, proteins: 0, carbohydrates: 12, fats: 0, fiber: 0, sugar: 12 }
                    },
                    {
                        name: "Płatki migdałowe",
                        count: 20,
                        unit: "g",
                        macros: { kcal: 115, proteins: 4.2, carbohydrates: 4.3, fats: 9.9, fiber: 2.4, sugar: 0.9 }
                    }
                ],
                recipe: "Jogurt wymieszaj z miodem i posyp płatkami migdałowymi."
            }
        },
        {
            name: "Obiad",
            meal: {
                name: "Wołowina duszona z kaszą gryczaną i surówką z kiszonej kapusty",
                img_b64: "",
                ingredients: [
                    {
                        name: "Mięso wołowe (np. udziec, łopatka)",
                        count: 180,
                        unit: "g",
                        macros: { kcal: 300, proteins: 36, carbohydrates: 0, fats: 18, fiber: 0, sugar: 0 }
                    },
                    {
                        name: "Kasza gryczana (sucha)",
                        count: 100,
                        unit: "g",
                        macros: { kcal: 340, proteins: 13, carbohydrates: 70, fats: 3, fiber: 10, sugar: 2 }
                    },
                    {
                        name: "Kapusta kiszona",
                        count: 150,
                        unit: "g",
                        macros: { kcal: 28, proteins: 1.4, carbohydrates: 6.5, fats: 0.2, fiber: 4.3, sugar: 2.5 }
                    },
                    {
                        name: "Cebula",
                        count: 50,
                        unit: "g",
                        macros: { kcal: 20, proteins: 0.5, carbohydrates: 4.7, fats: 0.1, fiber: 0.8, sugar: 2.3 }
                    }
                ],
                recipe: "Wołowinę pokrój w kostkę, obsmaż z cebulą, podlej wodą lub bulionem i duś do miękkości. Kaszę ugotuj. Podawaj z surówką z kiszonej kapusty (np. z dodatkiem marchewki i oleju lnianego)."
            }
        },
        {
            name: "Kolacja",
            meal: {
                name: "Chudy twaróg z miodem i cynamonem",
                img_b64: "",
                ingredients: [
                    {
                        name: "Twaróg chudy",
                        count: 250,
                        unit: "g",
                        macros: { kcal: 225, proteins: 45, carbohydrates: 8, fats: 1, fiber: 0, sugar: 8 }
                    },
                    {
                        name: "Miód",
                        count: 10,
                        unit: "g",
                        macros: { kcal: 30, proteins: 0, carbohydrates: 8, fats: 0, fiber: 0, sugar: 8 }
                    },
                    {
                        name: "Cynamon",
                        count: 2,
                        unit: "g",
                        macros: { kcal: 5, proteins: 0.1, carbohydrates: 1.6, fats: 0.1, fiber: 1, sugar: 0 }
                    }
                ],
                recipe: "Twaróg wymieszaj z miodem i cynamonem. Można dodać odrobinę mleka dla lepszej konsystencji."
            }
        }
    ],
    // ----- DZIEŃ 4 -----
    [
        {
            name: "Śniadanie",
            meal: {
                name: "Owsianka na bogato",
                img_b64: "",
                ingredients: [
                    {
                        name: "Płatki owsiane górskie",
                        count: 100,
                        unit: "g",
                        macros: { kcal: 370, proteins: 12, carbohydrates: 62, fats: 7, fiber: 10, sugar: 1 }
                    },
                    {
                        name: "Mleko migdałowe niesłodzone",
                        count: 250,
                        unit: "ml",
                        macros: { kcal: 40, proteins: 1, carbohydrates: 1, fats: 3, fiber: 1, sugar: 0 }
                    },
                    {
                        name: "Jagody (mrożone lub świeże)",
                        count: 100,
                        unit: "g",
                        macros: { kcal: 57, proteins: 0.7, carbohydrates: 14.5, fats: 0.3, fiber: 2.4, sugar: 10 }
                    },
                    {
                        name: "Nasiona chia",
                        count: 15,
                        unit: "g",
                        macros: { kcal: 73, proteins: 2.5, carbohydrates: 6.3, fats: 4.6, fiber: 5.1, sugar: 0 }
                    },
                    {
                        name: "Masło orzechowe",
                        count: 20,
                        unit: "g",
                        macros: { kcal: 120, proteins: 5, carbohydrates: 4, fats: 10, fiber: 1.3, sugar: 1.3 }
                    }
                ],
                recipe: "Płatki ugotuj na mleku migdałowym z nasionami chia. Pod koniec dodaj jagody. Przełóż do miski, dodaj masło orzechowe."
            }
        },
        {
            name: "II Śniadanie",
            meal: {
                name: "Wrap z kurczakiem i warzywami",
                img_b64: "",
                ingredients: [
                    {
                        name: "Tortilla pełnoziarnista",
                        count: 1,
                        unit: "szt (ok. 60g)",
                        macros: { kcal: 180, proteins: 5, carbohydrates: 30, fats: 4, fiber: 3, sugar: 2 }
                    },
                    {
                        name: "Pierś z kurczaka (ugotowana/upieczona, pokrojona)",
                        count: 100,
                        unit: "g",
                        macros: { kcal: 110, proteins: 22, carbohydrates: 0, fats: 2, fiber: 0, sugar: 0 }
                    },
                    {
                        name: "Mix sałat",
                        count: 30,
                        unit: "g",
                        macros: { kcal: 5, proteins: 0.5, carbohydrates: 0.6, fats: 0.1, fiber: 0.5, sugar: 0.3 }
                    },
                    {
                        name: "Papryka czerwona",
                        count: 50,
                        unit: "g",
                        macros: { kcal: 15, proteins: 0.5, carbohydrates: 3, fats: 0.1, fiber: 1, sugar: 2 }
                    },
                    {
                        name: "Sos jogurtowo-czosnkowy (domowy)",
                        count: 30,
                        unit: "g",
                        macros: { kcal: 30, proteins: 1.5, carbohydrates: 2, fats: 2, fiber: 0.1, sugar: 1.5 }
                    }
                ],
                recipe: "Na tortilli rozłóż sałatę, kurczaka, pokrojoną paprykę. Polej sosem i zawiń."
            }
        },
        {
            name: "Obiad",
            meal: {
                name: "Makaron pełnoziarnisty z indykiem i sosem pomidorowym",
                img_b64: "",
                ingredients: [
                    {
                        name: "Makaron pełnoziarnisty (suchy)",
                        count: 100,
                        unit: "g",
                        macros: { kcal: 340, proteins: 13, carbohydrates: 65, fats: 2.5, fiber: 8, sugar: 3 }
                    },
                    {
                        name: "Mięso mielone z indyka",
                        count: 150,
                        unit: "g",
                        macros: { kcal: 240, proteins: 30, carbohydrates: 0, fats: 13.5, fiber: 0, sugar: 0 }
                    },
                    {
                        name: "Passata pomidorowa",
                        count: 200,
                        unit: "g",
                        macros: { kcal: 60, proteins: 2.4, carbohydrates: 10, fats: 0.4, fiber: 2, sugar: 7 }
                    },
                    {
                        name: "Cebula",
                        count: 50,
                        unit: "g",
                        macros: { kcal: 20, proteins: 0.5, carbohydrates: 4.7, fats: 0.1, fiber: 0.8, sugar: 2.3 }
                    },
                    {
                        name: "Czosnek",
                        count: 5,
                        unit: "g (1 ząbek)",
                        macros: { kcal: 7, proteins: 0.3, carbohydrates: 1.6, fats: 0, fiber: 0.1, sugar: 0 }
                    },
                    {
                        name: "Oliwa z oliwek",
                        count: 5,
                        unit: "ml",
                        macros: { kcal: 45, proteins: 0, carbohydrates: 0, fats: 5, fiber: 0, sugar: 0 }
                    }
                ],
                recipe: "Makaron ugotuj al dente. Na oliwie zeszklij posiekaną cebulę i czosnek, dodaj mięso mielone i smaż. Wlej passatę, duś ok. 10-15 min. Podawaj z makaronem."
            }
        },
        {
            name: "Kolacja",
            meal: {
                name: "Sałatka grecka z fetą i oliwkami",
                img_b64: "",
                ingredients: [
                    {
                        name: "Ser feta",
                        count: 100,
                        unit: "g",
                        macros: { kcal: 260, proteins: 14, carbohydrates: 4, fats: 21, fiber: 0, sugar: 4 }
                    },
                    {
                        name: "Pomidor",
                        count: 150,
                        unit: "g",
                        macros: { kcal: 27, proteins: 1.3, carbohydrates: 5.8, fats: 0.3, fiber: 1.8, sugar: 4 }
                    },
                    {
                        name: "Ogórek świeży",
                        count: 100,
                        unit: "g",
                        macros: { kcal: 15, proteins: 0.7, carbohydrates: 3.6, fats: 0.1, fiber: 0.5, sugar: 1.7 }
                    },
                    {
                        name: "Papryka zielona",
                        count: 50,
                        unit: "g",
                        macros: { kcal: 10, proteins: 0.4, carbohydrates: 2.3, fats: 0.1, fiber: 0.9, sugar: 1.2 }
                    },
                    {
                        name: "Cebula czerwona",
                        count: 30,
                        unit: "g",
                        macros: { kcal: 12, proteins: 0.3, carbohydrates: 2.8, fats: 0, fiber: 0.5, sugar: 1.4 }
                    },
                    {
                        name: "Oliwki czarne",
                        count: 30,
                        unit: "g",
                        macros: { kcal: 35, proteins: 0.2, carbohydrates: 1.8, fats: 3, fiber: 1, sugar: 0 }
                    },
                    {
                        name: "Oliwa z oliwek",
                        count: 10,
                        unit: "ml",
                        macros: { kcal: 90, proteins: 0, carbohydrates: 0, fats: 10, fiber: 0, sugar: 0 }
                    }
                ],
                recipe: "Warzywa pokrój, wymieszaj z serem feta i oliwkami. Polej oliwą, dopraw oregano."
            }
        }
    ],
    // ----- DZIEŃ 5 -----
    [
        {
            name: "Śniadanie",
            meal: {
                name: "Tosty francuskie z chleba pełnoziarnistego z owocami",
                img_b64: "",
                ingredients: [
                    {
                        name: "Chleb pełnoziarnisty",
                        count: 120,
                        unit: "g (ok. 3 kromki)",
                        macros: { kcal: 280, proteins: 8, carbohydrates: 50, fats: 3, fiber: 9, sugar: 4 }
                    },
                    {
                        name: "Jaja kurze",
                        count: 2,
                        unit: "szt",
                        macros: { kcal: 140, proteins: 12, carbohydrates: 1, fats: 10, fiber: 0, sugar: 1 }
                    },
                    {
                        name: "Mleko 2%",
                        count: 50,
                        unit: "ml",
                        macros: { kcal: 25, proteins: 1.6, carbohydrates: 2.4, fats: 1, fiber: 0, sugar: 2.4 }
                    },
                    {
                        name: "Masło klarowane (do smażenia)",
                        count: 10,
                        unit: "g",
                        macros: { kcal: 90, proteins: 0, carbohydrates: 0, fats: 10, fiber: 0, sugar: 0 }
                    },
                    {
                        name: "Maliny (świeże lub mrożone)",
                        count: 100,
                        unit: "g",
                        macros: { kcal: 52, proteins: 1.2, carbohydrates: 12, fats: 0.7, fiber: 6.5, sugar: 4.4 }
                    }
                ],
                recipe: "Jajka roztrzep z mlekiem. Kromki chleba maczaj w masie jajecznej i smaż na maśle klarowanym na złoty kolor. Podawaj z malinami."
            }
        },
        {
            name: "II Śniadanie",
            meal: {
                name: "Skyr z masłem orzechowym i bananem",
                img_b64: "",
                ingredients: [
                    {
                        name: "Skyr naturalny",
                        count: 200,
                        unit: "g",
                        macros: { kcal: 130, proteins: 22, carbohydrates: 8, fats: 0.4, fiber: 0, sugar: 8 }
                    },
                    {
                        name: "Masło orzechowe",
                        count: 30,
                        unit: "g",
                        macros: { kcal: 180, proteins: 7.5, carbohydrates: 6, fats: 15, fiber: 2, sugar: 2 }
                    },
                    {
                        name: "Banan",
                        count: 0.5,
                        unit: "szt (ok. 60g)",
                        macros: { kcal: 53, proteins: 0.5, carbohydrates: 13.5, fats: 0.15, fiber: 1.5, sugar: 7 }
                    }
                ],
                recipe: "Skyr wymieszaj z masłem orzechowym, na wierzch połóż pokrojonego banana."
            }
        },
        {
            name: "Obiad",
            meal: {
                name: "Łosoś pieczony z kaszą jaglaną i szparagami",
                img_b64: "",
                ingredients: [
                    {
                        name: "Filet z łososia",
                        count: 150,
                        unit: "g",
                        macros: { kcal: 310, proteins: 30, carbohydrates: 0, fats: 21, fiber: 0, sugar: 0 }
                    },
                    {
                        name: "Kasza jaglana (sucha)",
                        count: 100,
                        unit: "g",
                        macros: { kcal: 360, proteins: 11, carbohydrates: 70, fats: 3, fiber: 3, sugar: 0 }
                    },
                    {
                        name: "Szparagi zielone",
                        count: 200,
                        unit: "g",
                        macros: { kcal: 40, proteins: 4.4, carbohydrates: 7.8, fats: 0.2, fiber: 4.2, sugar: 3.8 }
                    },
                    {
                        name: "Cytryna",
                        count: 0.25,
                        unit: "szt",
                        macros: { kcal: 5, proteins: 0.2, carbohydrates: 1.5, fats: 0, fiber: 0.5, sugar: 0.5 }
                    },
                    {
                        name: "Oliwa z oliwek",
                        count: 5,
                        unit: "ml",
                        macros: { kcal: 45, proteins: 0, carbohydrates: 0, fats: 5, fiber: 0, sugar: 0 }
                    }
                ],
                recipe: "Łososia skrop sokiem z cytryny, dopraw i upiecz. Kaszę ugotuj. Szparagi ugotuj na parze lub krótko podsmaż na oliwie."
            }
        },
        {
            name: "Kolacja",
            meal: {
                name: "Omlet warzywny",
                img_b64: "",
                ingredients: [
                    {
                        name: "Jaja kurze",
                        count: 3,
                        unit: "szt",
                        macros: { kcal: 210, proteins: 18, carbohydrates: 1.5, fats: 15, fiber: 0, sugar: 1.5 }
                    },
                    {
                        name: "Papryka czerwona",
                        count: 50,
                        unit: "g",
                        macros: { kcal: 15, proteins: 0.5, carbohydrates: 3, fats: 0.1, fiber: 1, sugar: 2 }
                    },
                    {
                        name: "Cebula",
                        count: 30,
                        unit: "g",
                        macros: { kcal: 12, proteins: 0.3, carbohydrates: 2.8, fats: 0, fiber: 0.5, sugar: 1.4 }
                    },
                    {
                        name: "Pieczarki",
                        count: 50,
                        unit: "g",
                        macros: { kcal: 11, proteins: 1.5, carbohydrates: 0.2, fats: 0.2, fiber: 1, sugar: 0.1 }
                    },
                    {
                        name: "Olej rzepakowy (do smażenia)",
                        count: 5,
                        unit: "ml",
                        macros: { kcal: 45, proteins: 0, carbohydrates: 0, fats: 5, fiber: 0, sugar: 0 }
                    }
                ],
                recipe: "Warzywa pokrój i podsmaż na oleju. Jajka roztrzep, wylej na patelnię z warzywami. Smaż pod przykryciem na małym ogniu do ścięcia."
            }
        }
    ],
    // ----- DZIEŃ 6 -----
    [
        {
            name: "Śniadanie",
            meal: {
                name: "Naleśniki wysokobiałkowe z twarogiem i owocami",
                img_b64: "",
                ingredients: [
                    {
                        name: "Mąka pełnoziarnista",
                        count: 50,
                        unit: "g",
                        macros: { kcal: 165, proteins: 7, carbohydrates: 30, fats: 1.5, fiber: 5, sugar: 1 }
                    },
                    {
                        name: "Jajo kurze",
                        count: 1,
                        unit: "szt",
                        macros: { kcal: 70, proteins: 6, carbohydrates: 0.5, fats: 5, fiber: 0, sugar: 0.5 }
                    },
                    {
                        name: "Odżywka białkowa",
                        count: 20,
                        unit: "g",
                        macros: { kcal: 80, proteins: 16, carbohydrates: 1.5, fats: 1.5, fiber: 0, sugar: 0.8 }
                    },
                    {
                        name: "Mleko 1.5%",
                        count: 100,
                        unit: "ml",
                        macros: { kcal: 47, proteins: 3.3, carbohydrates: 4.8, fats: 1.5, fiber: 0, sugar: 4.8 }
                    },
                    {
                        name: "Twaróg chudy (na farsz)",
                        count: 150,
                        unit: "g",
                        macros: { kcal: 135, proteins: 27, carbohydrates: 5, fats: 0.5, fiber: 0, sugar: 5 }
                    },
                    {
                        name: "Truskawki (do farszu/dekoracji)",
                        count: 100,
                        unit: "g",
                        macros: { kcal: 32, proteins: 0.7, carbohydrates: 7.7, fats: 0.3, fiber: 2, sugar: 4.9 }
                    }
                ],
                recipe: "Mąkę, jajko, odżywkę i mleko zmiksuj na ciasto naleśnikowe. Usmaż cienkie naleśniki. Twaróg wymieszaj z odrobiną słodzika/miodu i pokrojonymi truskawkami. Nadziewaj naleśniki."
            }
        },
        {
            name: "II Śniadanie",
            meal: {
                name: "Garść orzechów i owoc",
                img_b64: "",
                ingredients: [
                    {
                        name: "Mieszanka orzechów (włoskie, laskowe, migdały)",
                        count: 40,
                        unit: "g",
                        macros: { kcal: 250, proteins: 7, carbohydrates: 8, fats: 22, fiber: 3, sugar: 2 }
                    },
                    {
                        name: "Gruszka",
                        count: 1,
                        unit: "szt (ok. 180g)",
                        macros: { kcal: 103, proteins: 0.7, carbohydrates: 27, fats: 0.2, fiber: 5.5, sugar: 17 }
                    }
                ],
                recipe: "Po prostu zjedz orzechy i gruszkę."
            }
        },
        {
            name: "Obiad",
            meal: {
                name: "Chilli con carne z chudą wołowiną i ryżem",
                img_b64: "",
                ingredients: [
                    {
                        name: "Mięso mielone wołowe chude (np. ligawa)",
                        count: 180,
                        unit: "g",
                        macros: { kcal: 250, proteins: 38, carbohydrates: 0, fats: 10, fiber: 0, sugar: 0 }
                    },
                    {
                        name: "Czerwona fasola konserwowa (odsączona)",
                        count: 100,
                        unit: "g",
                        macros: { kcal: 90, proteins: 6, carbohydrates: 15, fats: 0.5, fiber: 6, sugar: 1 }
                    },
                    {
                        name: "Kukurydza konserwowa (odsączona)",
                        count: 50,
                        unit: "g",
                        macros: { kcal: 45, proteins: 1.5, carbohydrates: 9, fats: 0.5, fiber: 1.5, sugar: 3 }
                    },
                    {
                        name: "Pomidory krojone w puszce",
                        count: 200,
                        unit: "g",
                        macros: { kcal: 40, proteins: 2, carbohydrates: 8, fats: 0.2, fiber: 2, sugar: 6 }
                    },
                    {
                        name: "Ryż biały długoziarnisty (suchy)",
                        count: 80,
                        unit: "g",
                        macros: { kcal: 280, proteins: 5.5, carbohydrates: 62, fats: 0.5, fiber: 1, sugar: 0 }
                    },
                    {
                        name: "Cebula, czosnek, papryczka chilli, przyprawy",
                        count: 1,
                        unit: "wg uznania",
                        macros: { kcal: 20, proteins: 1, carbohydrates: 4, fats: 0.1, fiber: 1, sugar: 2 } // szacunkowo
                    }
                ],
                recipe: "Na patelni zeszklij cebulę, czosnek, chilli. Dodaj mięso, smaż. Dodaj pomidory, fasolę, kukurydzę, przyprawy (kumin, kolendra, oregano, sól, pieprz). Duś ok 20 min. Podawaj z ugotowanym ryżem."
            }
        },
        {
            name: "Kolacja",
            meal: {
                name: "Kanapki z pastą jajeczną i szczypiorkiem",
                img_b64: "",
                ingredients: [
                    {
                        name: "Chleb razowy",
                        count: 90,
                        unit: "g (ok. 2-3 kromki)",
                        macros: { kcal: 210, proteins: 6, carbohydrates: 38, fats: 2, fiber: 7, sugar: 3 }
                    },
                    {
                        name: "Jaja kurze gotowane",
                        count: 2,
                        unit: "szt",
                        macros: { kcal: 140, proteins: 12, carbohydrates: 1, fats: 10, fiber: 0, sugar: 1 }
                    },
                    {
                        name: "Jogurt naturalny (do pasty)",
                        count: 30,
                        unit: "g (2 łyżki)",
                        macros: { kcal: 18, proteins: 1.2, carbohydrates: 1.8, fats: 0.8, fiber: 0, sugar: 1.8 }
                    },
                    {
                        name: "Szczypiorek",
                        count: 10,
                        unit: "g",
                        macros: { kcal: 3, proteins: 0.3, carbohydrates: 0.4, fats: 0.1, fiber: 0.3, sugar: 0.2 }
                    }
                ],
                recipe: "Jajka ugotowane na twardo rozgnieć widelcem, wymieszaj z jogurtem i posiekanym szczypiorkiem. Dopraw solą i pieprzem. Nałóż na chleb."
            }
        }
    ],
    // ----- DZIEŃ 7 -----
    [
        {
            name: "Śniadanie",
            meal: {
                name: "Kasza manna na mleku z owocami i bakaliami",
                img_b64: "",
                ingredients: [
                    {
                        name: "Kasza manna",
                        count: 80,
                        unit: "g",
                        macros: { kcal: 280, proteins: 8, carbohydrates: 60, fats: 1, fiber: 2, sugar: 0.5 }
                    },
                    {
                        name: "Mleko 2%",
                        count: 300,
                        unit: "ml",
                        macros: { kcal: 150, proteins: 10, carbohydrates: 15, fats: 6, fiber: 0, sugar: 15 }
                    },
                    {
                        name: "Rodzynki",
                        count: 20,
                        unit: "g",
                        macros: { kcal: 60, proteins: 0.6, carbohydrates: 15, fats: 0.1, fiber: 0.8, sugar: 12 }
                    },
                    {
                        name: "Suszone morele",
                        count: 30,
                        unit: "g",
                        macros: { kcal: 72, proteins: 1, carbohydrates: 18, fats: 0.2, fiber: 2.2, sugar: 16 }
                    },
                    {
                        name: "Dowolne świeże owoce (np. borówki)",
                        count: 50,
                        unit: "g",
                        macros: { kcal: 28, proteins: 0.4, carbohydrates: 7, fats: 0.2, fiber: 1.2, sugar: 5 }
                    }
                ],
                recipe: "Kaszę mannę ugotuj na mleku. Pod koniec dodaj rodzynki i pokrojone morele. Przełóż do miski, udekoruj świeżymi owocami."
            }
        },
        {
            name: "II Śniadanie",
            meal: {
                name: "Koktajl: kefir, banan, szpinak",
                img_b64: "",
                ingredients: [
                    {
                        name: "Kefir naturalny",
                        count: 300,
                        unit: "ml",
                        macros: { kcal: 150, proteins: 9, carbohydrates: 12, fats: 6, fiber: 0, sugar: 12 }
                    },
                    {
                        name: "Banan",
                        count: 1,
                        unit: "szt (ok. 120g)",
                        macros: { kcal: 105, proteins: 1, carbohydrates: 27, fats: 0.3, fiber: 3, sugar: 14 }
                    },
                    {
                        name: "Szpinak świeży (baby)",
                        count: 50,
                        unit: "g",
                        macros: { kcal: 12, proteins: 1.5, carbohydrates: 1.8, fats: 0.2, fiber: 1.1, sugar: 0.2 }
                    }
                ],
                recipe: "Wszystkie składniki zmiksuj w blenderze."
            }
        },
        {
            name: "Obiad",
            meal: {
                name: "Gulasz wieprzowy z kaszą pęczak i ogórkiem kiszonym",
                img_b64: "",
                ingredients: [
                    {
                        name: "Łopatka wieprzowa",
                        count: 180,
                        unit: "g",
                        macros: { kcal: 350, proteins: 32, carbohydrates: 0, fats: 25, fiber: 0, sugar: 0 }
                    },
                    {
                        name: "Kasza pęczak (sucha)",
                        count: 100,
                        unit: "g",
                        macros: { kcal: 340, proteins: 10, carbohydrates: 68, fats: 2, fiber: 6, sugar: 1 }
                    },
                    {
                        name: "Ogórek kiszony",
                        count: 150,
                        unit: "g",
                        macros: { kcal: 18, proteins: 0.9, carbohydrates: 3.3, fats: 0.3, fiber: 2.2, sugar: 1.5 }
                    },
                    {
                        name: "Cebula, papryka, marchew (do gulaszu)",
                        count: 100,
                        unit: "g (łącznie)",
                        macros: { kcal: 40, proteins: 1.5, carbohydrates: 8, fats: 0.3, fiber: 2.5, sugar: 4 } // szacunkowo
                    }
                ],
                recipe: "Mięso pokrój, obsmaż z warzywami, podlej wodą/bulionem, dodaj przyprawy (liść laurowy, ziele angielskie, majeranek, papryka słodka/ostra) i duś do miękkości. Kaszę ugotuj. Podawaj z ogórkiem kiszonym."
            }
        },
        {
            name: "Kolacja",
            meal: {
                name: "Sałatka z wędzonym łososiem, roszponką i jajkiem",
                img_b64: "",
                ingredients: [
                    {
                        name: "Łosoś wędzony na gorąco",
                        count: 100,
                        unit: "g",
                        macros: { kcal: 180, proteins: 20, carbohydrates: 0, fats: 11, fiber: 0, sugar: 0 }
                    },
                    {
                        name: "Roszponka",
                        count: 70,
                        unit: "g",
                        macros: { kcal: 15, proteins: 1.4, carbohydrates: 2.5, fats: 0.3, fiber: 1, sugar: 0 }
                    },
                    {
                        name: "Jajko gotowane na twardo",
                        count: 1,
                        unit: "szt",
                        macros: { kcal: 70, proteins: 6, carbohydrates: 0.5, fats: 5, fiber: 0, sugar: 0.5 }
                    },
                    {
                        name: "Pomidorki koktajlowe",
                        count: 100,
                        unit: "g",
                        macros: { kcal: 18, proteins: 0.9, carbohydrates: 3.9, fats: 0.2, fiber: 1.2, sugar: 2.6 }
                    },
                    {
                        name: "Dressing winegret (oliwa, sok z cytryny, musztarda)",
                        count: 15,
                        unit: "ml",
                        macros: { kcal: 70, proteins: 0.1, carbohydrates: 1, fats: 7, fiber: 0, sugar: 0.5 }
                    }
                ],
                recipe: "Na talerzu ułóż roszponkę, dodaj kawałki łososia, pokrojone jajko i pomidorki. Polej dressingiem."
            }
        }
    ]
];