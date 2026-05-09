export interface RouteItem {
  id: string;
  routeName: string;
  driverName: string;
  vehiclePlate: string;
  studentsAssigned: number;
  status: 'Activo' | 'Inactivo';
}