import java.util.concurrent.Callable ;​​
 import java.util.concurrent.ExecutorService ;​​
 import java.util.concurrent.Executors ;​​
 import java.util.concurrent.Future ;​​

 clase TareaSumadora implementa Callable < Integer > {

 privado entero número ;

 public TareaSumadora ( int numero ) {
 este . numero = numero ;
 }

 @ Anular
 public Integer call () throws Exception {

 entero suma = 0;

 para ( int i = 0; i <= numero ; i ++) {
 suma += i ;
 Hilo.dormir ( 10 );
 }

 Sistema . afuera . println ( "Suma de " + numero + " calculada." );

 devolver suma ;
 }
 }

 clase pública Main {

 public static void main ( String [] args )
 lanza InterruptedException , Excepción {

 ExecutorService ejecutor =
 Ejecutores.newFixedThreadPool ( 3 );

 Futuro < Entero > futuro1 =
 ejecutor . enviar ( nueva TareaSumadora (10));

 Futuro < Entero > futuro2 =
 ejecutor . enviar ( nueva TareaSumadora (20));

 Futuro < Entero > futuro3 =
 ejecutor . enviar ( nueva TareaSumadora (30));

 Sistema . afuera . println ( "Resultado 1: " + futuro1 . get ());
 Sistema . afuera . println ( "Resultado 2: " + futuro2 . get ());
 Sistema . afuera . println ( "Resultado 3: " + futuro3 . get ());

 ejecutor.apagar () ;
 }
 }