# Angular Observables Exercise & Demo

## To Download Code

- Click on the green "code" button.

- Click "Download ZIP".

- Extract Files.

- Open in VSCode.

- Run `npm install`.

---

## Exercise

- [Github Repo Starting Code](https://github.com/WilderDev/Candy-Observables-Project/tree/Starter-Code)

1. Create a new Subject in the PillowCaseService that emits when the myCandies array updates.

2. Subscribe to that change and update the local myCandies array.

3. Create a variable of type "Subscription", store the observable under inside, and use `ngOnDestroy` to unsubscribe when the component is destoyed.

4. Create a new Subject in the CandyStoreService that emits when the candiesForSale array updates.

5. Subscribe to that change and update the local candiesForSale array.

6. Create a variable of type "Subscription", store the observable under inside, and use `ngOnDestroy` to unsubscribe when the component is destoyed.
