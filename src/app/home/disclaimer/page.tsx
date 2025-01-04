import Spacer from "@/components/spacer";
import BackAndForwardButtons from "@/components/navigationButtons/backAndForwardButtons";

export default function DisclaimerPage() {
  return (
    <div className="flex flex-col h-screen justify-between" style={{ fontFamily: 'var(--font-geist-mono)', margin: '20px', padding: '20px', maxWidth: '800px', lineHeight: '1.6' }}>
      
      <div className="flex-grow">
        <h1 style={{ fontSize: 23 }} >Medical Disclaimer</h1>
        <Spacer size="20px" />
        
        <p style={{ fontFamily: 'var(--font-geist-sans)'}}>
          The information provided on this website is for informational purposes only and is not intended as medical advice. Always consult with a qualified healthcare provider before making any decisions related to your health, treatments, or medications. While every effort is made to provide accurate and up-to-date information, we cannot guarantee the accuracy, completeness, or timeliness of the content presented here. The use of this information is at your own risk. If you are experiencing a medical emergency or need immediate assistance, please contact a healthcare professional or emergency services immediately. By using this website, you agree to this disclaimer and acknowledge that we are not responsible for any medical decisions or outcomes based on the content provided.
        </p>
        <Spacer size="20px" />
      </div>
      
      <div className="p-4">
        <BackAndForwardButtons />
      </div>
    </div>
  );
}
