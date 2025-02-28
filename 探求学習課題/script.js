document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('calculate-button').addEventListener('click', () => {
        const checkboxes = document.querySelectorAll('input[name="food"]:checked');
        let totalCalories = 0;
        checkboxes.forEach(checkbox => {
            totalCalories += parseInt(checkbox.value, 10);
        });
        document.getElementById('result').textContent = `合計カロリー: ${totalCalories} kcal`;
    });
});
