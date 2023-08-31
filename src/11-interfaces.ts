interface Driver{
  database: string;
  password: string;
  port: number;

  //Also allow methods, init methods
  connect(): void;
  disconnect(): void;
  isConnected(name: string):  boolean;
}

// Common interfaces
// const driver: Driver = {
//   database: '',
//   password: '',
//   port: 23
// }


// Is not inheritance, implements is to mention that you need Driver variables as necessary
class PostgresDriver implements Driver{
  constructor(
    public database: string,
    public password: string,
    public port: number,
    private host: number
  ){}

  connect(): void {
    
  }

  disconnect(): void {
   //Code 
  }
  isConnected(name: string): boolean {
   return true
  }


}

class OracleDriver implements Driver{
  constructor(
    public database: string,
    public password: string,
    public port: number
  ){}

  // Always need to be void according to the contract
  connect(): void {
   //Code
  }

  disconnect(): void {
    //Code 
   }
  isConnected(name: string): boolean {
  return true
  }

}