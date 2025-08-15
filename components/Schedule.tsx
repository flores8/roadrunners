import { siteContent } from '@/lib/content'

export default function Schedule() {
  const { schedule } = siteContent

  return (
    <section id="schedule" className="section-padding bg-gray-900/30">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">{schedule.title}</span>
          </h2>
          <p className="text-xl text-gray-300">{schedule.subtitle}</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="text-left py-4 px-4 text-accent-orange font-bold">Day</th>
                <th className="text-left py-4 px-4 text-accent-orange font-bold">Time</th>
                <th className="text-left py-4 px-4 text-accent-orange font-bold">Groups</th>
                <th className="text-left py-4 px-4 text-accent-orange font-bold">Focus</th>
              </tr>
            </thead>
            <tbody>
              {schedule.sessions.map((session, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-800 hover:bg-gray-900/50 transition-colors"
                >
                  <td className="py-4 px-4 font-semibold text-light-yellow">{session.day}</td>
                  <td className="py-4 px-4 text-gray-300">{session.time}</td>
                  <td className="py-4 px-4 text-gray-300">{session.groups}</td>
                  <td className="py-4 px-4 text-accent-blue">{session.focus}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 p-4 bg-accent-blue/10 rounded-lg border border-accent-blue/30">
          <p className="text-center text-gray-300">
            <span className="font-semibold text-accent-blue">Note:</span> All training sessions are held at City Track Stadium. 
            Weather updates will be posted on our Instagram page.
          </p>
        </div>
      </div>
    </section>
  )
}
