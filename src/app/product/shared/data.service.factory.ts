import { HttpClient } from "@angular/common/http";

import { LocalDataService } from "./local-data.service";
import { productService } from "./product.service";
import { environment } from "src/environments/environment.development";


export function dataServiceFactory(http: HttpClient) {
    if(environment.useLocalData){
        return new LocalDataService();
    } else {
        return new productService(http);
    }
}