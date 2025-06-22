import {emptyShoppingList} from "../data/EmptyListsData.js";

export function createShoppingList(fullDietData, ingredientsData, ingredientsKeys) {
    if (
        !fullDietData ||
        !Array.isArray(ingredientsData) || ingredientsData.length === 0 ||
        !Array.isArray(ingredientsKeys) || ingredientsKeys.length === 0
    ) {
        return emptyShoppingList;
    }

    return fullDietData.map((dayMeals) => {
        const dailyShoppingMap = new Map();

        dayMeals.forEach(mealBlock => {
            Object.entries(mealBlock.meal.ingredients).forEach(([id, count]) => {
                const ingredientIndex = ingredientsKeys.indexOf(id);
                if (ingredientIndex === -1) return;
                const {name, unit, categoryId} = ingredientsData[ingredientIndex];

                if (!name || count === 0) return;

                if (dailyShoppingMap.has(name)) {
                    dailyShoppingMap.get(name).count += count;
                } else {
                    dailyShoppingMap.set(name, {
                        name,
                        count,
                        unit,
                        categoryId,
                    });
                }
            });
        });

        const singleDayList = Array.from(dailyShoppingMap.values());

        singleDayList.sort((a, b) => {
            if (a.categoryId !== b.categoryId) {
                return a.categoryId - b.categoryId;
            }
            return a.name.localeCompare(b.name);
        });
        return singleDayList;
    });
}