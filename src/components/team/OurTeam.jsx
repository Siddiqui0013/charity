import TeamMemberImg from "../../assets/team/teamMember.png";
import { ArrowRight } from "lucide-react";

export default function OurTeam() {
	const teamMembers = [
		{
			name: "Esther Howard",
			image: TeamMemberImg,
		},
		{
			name: "Dianne Russell",
			image: TeamMemberImg,
		},
		{
			name: "Darlene Robertson",
			image: TeamMemberImg,
		},
		{
			name: "Brooklyn Simmons",
			image: TeamMemberImg,
		},
	];

	return (
		<div className="min-h-[600px] flex flex-col gap-8 items-center bg-[url('./src/assets/team/bg.png')] pt-12 bg-cover bg-no-repeat">
			<div className="text-center mb-12">
				<span className="text-sm font-medium text-primary mb-2 block">
					TEAM
				</span>
				<h2 className="text-3xl font-bold text-gray-900">Meet Our Team</h2>
			</div>

			<div className="grid grid-cols-2 lg:grid-cols-4 md:gap-8 gap-4 px-2 md:p-0">
				{teamMembers.map((member, index) => (
					<div key={index} className="flex flex-col items-center">
						<div className=" mb-4">
							<div
								className={`w-48 h-48 `}
							>
								<img
									src={member.image}
									alt={member.name}
									className="w-full h-full object-cover"
								/>
							</div>
						</div>
						<h3 className="text-lg font-medium text-gray-900">{member.name}</h3>
					</div>
				))}
			</div>

			<div className="flex items-center w-fit px-12 mb-10 shadow-lg py-4 rounded-full cursor-pointer gap-2 justify-around bg-primary">
                <span className="text-white">View All Team</span>
				<ArrowRight color="white" size={16} />
			</div>
		</div>
	);
}
