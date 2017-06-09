import {Pipe, PipeTransform} from '@angular/core';
import {Supplier} from './supplier.model';
/**
 * Created by reddyadi on 6/9/2017.
 */

@Pipe({
    name: 'supplierFilter',
    pure: false
})
export class SupplierPipe implements PipeTransform {
    transform(suppliers: Supplier[], filter: string): any {
        if (!suppliers || !filter) {
            return suppliers;
        }
        // filter items array, items which match and return true will be kept, false will be filtered out
        return suppliers.filter(supplier => supplier.name.indexOf(filter) !== -1);
    }

}
