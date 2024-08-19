String sayHello(String name, int age, String country) {
    return "Hello, $name, you are $age from $country";
}

void main() {
  print(sayHello(
    age : 19, 
    name :'nico', 
    country: 'cuba'
  ));
}