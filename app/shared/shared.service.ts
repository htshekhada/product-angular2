import {Injectable}      from '@angular/core'
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Product}  from '../product/product.service';

@Injectable()
export class SharedService {
    private cartItems: Product[] = [];
    // Observable xxx source
    private cartItemsSource = new BehaviorSubject<Array<Product>>([]);
    // Observable xxx stream
    cartItems$ = this.cartItemsSource.asObservable();
    // service command
    addItemToCart(product: Product) {
        this.cartItems.push(product);
        this.cartItemsSource.next(this.cartItems);
    }
}