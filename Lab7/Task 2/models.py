class Vehicle:
    def __init__(self, make, model, year):
        self.make = make
        self.model = model
        self.year = year
        self.is_rented = False
    
    def start_engine(self):
        return f"The {self.year} {self.make} {self.model}'s engine is starting..."
    
    def get_info(self):
        status = "available" if not self.is_rented else "rented"
        return f"{self.year} {self.make} {self.model} - {status}"
    
    def __str__(self):
        return f"Vehicle: {self.year} {self.make} {self.model}"

class Car(Vehicle):
    def __init__(self, make, model, year, doors, fuel_type):
        super().__init__(make, model, year)
        self.doors = doors
        self.fuel_type = fuel_type
        self.trunk_capacity = 0
    
    def start_engine(self):
        base_sound = super().start_engine()
        return f"{base_sound} Vroom! The car is ready to drive."
    
    def honk(self):
        return "Beep beep!"
    
    def __str__(self):
        return f"Car: {self.year} {self.make} {self.model} - {self.doors} doors, {self.fuel_type}"

class Motorcycle(Vehicle):
    def __init__(self, make, model, year, engine_size, has_sidecar=False):
        super().__init__(make, model, year)
        self.engine_size = engine_size
        self.has_sidecar = has_sidecar
    
    def start_engine(self):
        base_sound = super().start_engine()
        return f"{base_sound} *Revving sound* The motorcycle is ready to ride!"
    
    def wheelie(self):
        if not self.has_sidecar:
            return f"The {self.make} {self.model} pops a wheelie!"
        else:
            return f"Can't do a wheelie with a sidecar attached!"
    
    def __str__(self):
        sidecar_status = "with sidecar" if self.has_sidecar else "without sidecar"
        return f"Motorcycle: {self.year} {self.make} {self.model} - {self.engine_size}cc {sidecar_status}"

class Truck(Vehicle):
    def __init__(self, make, model, year, payload_capacity, axles):
        super().__init__(make, model, year)
        self.payload_capacity = payload_capacity
        self.axles = axles
        self.current_load = 0
    
    def start_engine(self):
        base_sound = super().start_engine()
        return f"{base_sound} *Loud diesel rumble* The truck is ready for heavy hauling!"
    
    def load_cargo(self, weight):
        if self.current_load + weight <= self.payload_capacity:
            self.current_load += weight
            return f"Loaded {weight} tons. Current load: {self.current_load}/{self.payload_capacity} tons"
        else:
            return f"Cannot load {weight} tons - exceeds capacity of {self.payload_capacity} tons"
    
    def __str__(self):
        return f"Truck: {self.year} {self.make} {self.model} - {self.payload_capacity}t capacity, {self.axles} axles"