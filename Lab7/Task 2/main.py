from models import Vehicle, Car, Motorcycle, Truck

def main():
    print("=" * 50)
    print("VEHICLE RENTAL SYSTEM DEMONSTRATION")
    print("=" * 50)
    
    print("\n1. CREATING VEHICLE OBJECTS:")
    print("-" * 30)
    
    generic_vehicle = Vehicle("Generic", "Mover", 2020)
    
    car1 = Car("Toyota", "Camry", 2022, 4, "Petrol")
    car2 = Car("Tesla", "Model 3", 2023, 4, "Electric")
    
    motorcycle1 = Motorcycle("Harley-Davidson", "Sportster", 2021, 1200)
    motorcycle2 = Motorcycle("Honda", "Gold Wing", 2022, 1800, True)
    
    truck1 = Truck("Ford", "F-150", 2022, 1.5, 2)
    truck2 = Truck("Kenworth", "T680", 2023, 22.5, 3)
    
    vehicles = [generic_vehicle, car1, car2, motorcycle1, motorcycle2, truck1, truck2]
    
    print(f"Created {len(vehicles)} vehicles in the system")
    
    print("\n2. VEHICLE INVENTORY (using __str__ method):")
    print("-" * 30)
    for i, vehicle in enumerate(vehicles, 1):
        print(f"{i}. {vehicle}")
    
    print("\n3. DEMONSTRATING POLYMORPHISM:")
    print("-" * 30)
    print("Starting all vehicle engines (each makes different sounds):")
    
    for vehicle in vehicles:
        print(f"\n{vehicle.make} {vehicle.model}:")
        print(f"  {vehicle.start_engine()}")
    
    print("\n" + "=" * 50)
    print("4. DEMONSTRATING UNIQUE VEHICLE FEATURES:")
    print("=" * 50)
    
    print("\n--- CARS ---")
    print(f"Car 1 info: {car1.get_info()}")
    print(f"Car 1 horn: {car1.honk()}")
    
    print("\n--- MOTORCYCLES ---")
    print(f"Motorcycle 1 wheelie attempt: {motorcycle1.wheelie()}")
    print(f"Motorcycle 2 wheelie attempt: {motorcycle2.wheelie()}")
    
    print("\n--- TRUCKS ---")
    print(f"Truck 1 loading cargo:")
    print(f"  {truck1.load_cargo(0.5)}")
    print(f"  {truck1.load_cargo(0.8)}")
    print(f"  {truck1.load_cargo(0.3)}")
    
    print("\n" + "=" * 50)
    print("5. DEMONSTRATING RENTAL STATUS UPDATES:")
    print("=" * 50)
    
    car1.is_rented = True
    truck2.is_rented = True
    
    print("\nUpdated vehicle statuses:")
    for vehicle in vehicles:
        print(f"  {vehicle.get_info()}")
    
    print("\n" + "=" * 50)
    print("6. ADDITIONAL METHOD CALLS:")
    print("=" * 50)
    
    print(f"\nSpecific vehicle information:")
    print(f"  {car2.make} {car2.model} fuel type: {car2.fuel_type}")
    print(f"  {motorcycle1.make} {motorcycle1.model} engine: {motorcycle1.engine_size}cc")
    print(f"  {truck2.make} {truck2.model} payload: {truck2.payload_capacity} tons")
    
    print("\n" + "=" * 50)
    print("7. INHERITANCE HIERARCHY DEMONSTRATION:")
    print("=" * 50)
    
    print("\nChecking class relationships:")
    print(f"Car is subclass of Vehicle: {issubclass(Car, Vehicle)}")
    print(f"Motorcycle is subclass of Vehicle: {issubclass(Motorcycle, Vehicle)}")
    print(f"Truck is subclass of Vehicle: {issubclass(Truck, Vehicle)}")
    print(f"car1 is instance of Car: {isinstance(car1, Car)}")
    print(f"car1 is instance of Vehicle: {isinstance(car1, Vehicle)}")
    
    print("\n" + "=" * 50)
    print("DEMONSTRATION COMPLETE")
    print("=" * 50)

if __name__ == "__main__":
    main()