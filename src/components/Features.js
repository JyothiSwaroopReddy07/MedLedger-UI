import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Blockchain Security',
    description:
      'Our platform uses blockchain technology to create a tamper-proof record of each case. Every update, addition, or adjustment is verified and recorded, providing unparalleled security and transparency.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Real-Time Case Tracking',
    description:
      'Track each resident’s medical case in real time. MedLedger enables easy access to records, ensuring all authorized professionals have the latest information at their fingertips, improving response times and decision-making.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Compliance and Privacy',
    description:
      'MedLedger is built to comply with strict healthcare privacy regulations, including HIPAA, GDPR, and more. Blockchain’s decentralized nature offers enhanced privacy controls, giving your facility a compliant and secure way to handle resident data.',
    icon: LockClosedIcon ,
  },
  {
    name: 'Interoperability and Integration',
    description:
      'MedLedger easily integrates with existing EHRs and healthcare systems, ensuring a seamless experience for providers. Whether you’re tracking medications, diagnoses, or treatments, MedLedger keeps everything in sync.',
    icon: FingerPrintIcon,
  },
]

export default function Features() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
          Secure, Transparent, and Efficient Case Management for Healthcare Providers
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          Why Choose MedLedger
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-600">
                    <feature.icon aria-hidden="true" className="h-6 w-6 text-white" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
