export interface LoginRequest {
     email: string;
     password: string;
   }
   
   export interface LoginResponse {
     user: {
       id: string;
       email: string;
       inventory: any[]; 
     };
     token: string;
   }