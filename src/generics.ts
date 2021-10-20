class HoldAnything<T>{
    data: T;

    add(arg: T): T {
        return arg;
    }
}

const holdNumber = new HoldAnything<number>();
holdNumber.data = 123;
holdNumber.add(10);

const holdString = new HoldAnything<string>();
holdString.data = 'asdfdasfdas'