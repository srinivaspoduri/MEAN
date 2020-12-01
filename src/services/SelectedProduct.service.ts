import { Injectable } from '@angular/core'

@Injectable({
    providedIn: 'root'

})
//https://stackblitz.com/edit/angular-data-sharing-service-local-storage?file=src%2Fapp%2Fcart%2Fcart.component.html
export class SelectedProductService {
    private items: any[] = [];
    constructor() {
        this.items = JSON.parse(localStorage.getItem('items') || '[]');
    }
    add(item) {
        console.log("in add method" + this.items)
        this.items.push(item)

            this.syncItems();
    }
    remove(item) {
        const index = this.items.indexOf(item);
        this.items.splice(index, 1);
        this.syncItems();
    }
    get_items() {
        return this.items;
    }
    syncItems() {
        localStorage.setItem('items', JSON.stringify(this.items))
    }
    get_items_count() {
        return this.items.length;
    }
    clear_cart() {
        console.log("inside clear cart method")
        localStorage.clear();
        this.items = JSON.parse(localStorage.getItem('items') || '[]');
    }

}