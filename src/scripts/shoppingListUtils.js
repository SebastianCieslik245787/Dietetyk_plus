export function createShoppingList(fullDietData) {

    return fullDietData.map((dayMeals) => {

        const dailyShoppingMap = new Map();

        dayMeals.forEach(mealBlock => {
            mealBlock.meal.ingredients.forEach(ingredient => {
                const { name, count, unit, categoryId } = ingredient;

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