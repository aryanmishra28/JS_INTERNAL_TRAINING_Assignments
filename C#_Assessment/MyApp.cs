using System;

namespace PatientManagementSystem
{
    // =========================
    // 1. ABSTRACT PATIENT CLASS
    // =========================
    abstract class Patient
    {
        public int PatientId { get; set; }
        public string Name { get; set; }

        public abstract double GetBaseTreatmentCost();
    }

    // =========================
    // 2. PATIENT TYPES
    // =========================
    class GeneralPatient : Patient
    {
        public override double GetBaseTreatmentCost()
        {
            return 2000;
        }
    }

    class EmergencyPatient : Patient
    {
        public override double GetBaseTreatmentCost()
        {
            return 5000;
        }
    }

    // =========================
    // 3. BILLING DELEGATE
    // =========================
    delegate double BillingStrategy(double baseAmount);

    // =========================
    // 4. BILLING SERVICE
    // =========================
    class BillingService
    {
        public double CalculateBill(double baseAmount, BillingStrategy strategy)
        {
            return strategy(baseAmount);
        }
    }

    // =========================
    // 5. EVENT NOTIFICATION SERVICE
    // =========================
    class HospitalNotificationService
    {
        public event Action<string> Notify;

        public void SendNotification(string message)
        {
            Notify?.Invoke(message);
        }
    }

    // =========================
    // 6. HOSPITAL SYSTEM (CONTROLLER)
    // =========================
    class HospitalSystem
    {
        private BillingService billingService;
        private HospitalNotificationService notificationService;

        public HospitalSystem()
        {
            billingService = new BillingService();
            notificationService = new HospitalNotificationService();

            // Event subscription
            notificationService.Notify += OnNotificationReceived;
        }

        private void OnNotificationReceived(string message)
        {
            Console.WriteLine($"[NOTIFICATION] {message}");
        }

        public void AdmitPatient(Patient patient, BillingStrategy billingStrategy)
        {
            notificationService.SendNotification(
                $"Patient {patient.Name} (ID: {patient.PatientId}) admitted.");

            double baseCost = patient.GetBaseTreatmentCost();
            double finalBill = billingService.CalculateBill(baseCost, billingStrategy);

            Console.WriteLine("----------------------------------");
            Console.WriteLine($"Base Treatment Cost : ₹{baseCost}");
            Console.WriteLine($"Final Bill Amount   : ₹{finalBill}");
            Console.WriteLine("----------------------------------");

            notificationService.SendNotification(
                $"Billing completed for patient {patient.Name}.");
        }
    }

    // =========================
    // 7. MAIN PROGRAM
    // =========================
    class Program
    {
        static void Main(string[] args)
        {
            HospitalSystem hospitalSystem = new HospitalSystem();

            Console.WriteLine("==== Patient Management System ====");
            Console.WriteLine("1. General Patient");
            Console.WriteLine("2. Emergency Patient");
            Console.Write("Select Patient Type: ");

            int choice = int.Parse(Console.ReadLine());

            Patient patient;

            if (choice == 1)
            {
                patient = new GeneralPatient();
            }
            else
            {
                patient = new EmergencyPatient();
            }

            Console.Write("Enter Patient ID: ");
            patient.PatientId = int.Parse(Console.ReadLine());

            Console.Write("Enter Patient Name: ");
            patient.Name = Console.ReadLine();

            // Billing strategy using delegate (18% GST)
            BillingStrategy billingStrategy = baseAmount =>
            {
                return baseAmount + (baseAmount * 0.18);
            };

            hospitalSystem.AdmitPatient(patient, billingStrategy);

            Console.WriteLine("\nPress Enter to exit...");
            Console.ReadLine();
        }
    }
}
