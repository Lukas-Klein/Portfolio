<script>
	import { Timeline, TimelineItem } from 'flowbite-svelte';
	import SchoolSvg from '../assets/school.svg';
	import MechatronicsSvg from '../assets/mechatronics.svg';
	import DiplomaSvg from '../assets/diploma.svg';
	import UniversitySvg from '../assets/university.svg';
</script>

<Timeline order="vertical">
	<TimelineItem title="Middle School Graduation" date="July 31st, 2018">
		<svelte:fragment slot="icon">
			<span
				class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-primary-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-primary-900"
			>
				<img src={SchoolSvg} alt="" />
			</span>
		</svelte:fragment>
		<p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
			On July 31st, 2018, I successfully completed my middle school education in a STEM-focused
			program at a secondary school.
		</p>
	</TimelineItem>
	<TimelineItem title="Mechatronics Engineering Training" date="September 1st, 2018">
		<svelte:fragment slot="icon">
			<span
				class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-primary-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-primary-900"
			>
				<img src={MechatronicsSvg} alt="" />
			</span>
		</svelte:fragment>
		<p class="text-base font-normal text-gray-500 dark:text-gray-400">
			I embarked on my journey to become a mechatronics engineer on September 1st, 2018, by starting
			my training at the Robert Bosch GmbH in Bamberg, Germany.
		</p>
	</TimelineItem>
	<TimelineItem title=" Completion of Training and High School Diploma" date="July 31st, 2021">
		<svelte:fragment slot="icon">
			<span
				class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-primary-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-primary-900"
			>
				<img src={DiplomaSvg} alt="" />
			</span>
		</svelte:fragment>
		<p class="text-base font-normal text-gray-500 dark:text-gray-400">
			On July 31st, I reached a significant milestone by concluding my mechatronics engineering
			training and earning my high school diploma.
		</p>
	</TimelineItem>
	<TimelineItem title="Pursuing Computer Science Degree" date="October 1st, 2021">
		<svelte:fragment slot="icon">
			<span
				class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-primary-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-primary-900"
			>
				<img src={UniversitySvg} alt="" />
			</span>
		</svelte:fragment>
		<p class="text-base font-normal text-gray-500 dark:text-gray-400">
			I took a step further towards my career goals on October 1st, 2021, by enrolling in a dual
			study program at Deutsche Telekom AG to obtain my bachelor's degree in computer science.
		</p>
	</TimelineItem>
	<TimelineItem title="Dual Study Completed" date="September 2024">
		<svelte:fragment slot="icon">
			<span
				class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-primary-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-primary-900"
			>
				<img src={DiplomaSvg} alt="" />
			</span>
		</svelte:fragment>
		<p class="text-base font-normal text-gray-500 dark:text-gray-400">
			Wrapped up my dual study program in computer science in September 2024. My Bachelor thesis was
			about the Evolution of RAG (Retrieval Augemented Generation) Benchmarks. I compared and
			analyzed existing benchmarks and create my own benchmark based on my findings. It was graded
			with 1.0.
		</p>
	</TimelineItem>
	<TimelineItem title="DevOps Engineer at Deutsche Telekom IT" date="Present">
		<svelte:fragment slot="icon">
			<span
				class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-primary-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-primary-900"
			>
				<img src={UniversitySvg} alt="" />
			</span>
		</svelte:fragment>
		<p class="text-base font-normal text-gray-500 dark:text-gray-400">
			Now working as a DevOps Engineer at Deutsche Telekom IT in the Azure Landingzone Team,
			focusing on cloud engineering in Microsoft Azure. We also developed an internal RAG Chatbot
			during that time. It is written in python and uses Azure services.
		</p>
	</TimelineItem>
	<TimelineItem title="Telekom Talent Program" date="November 2025 - Present">
		<svelte:fragment slot="icon">
			<span
				class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-primary-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-primary-900"
			>
				<img src={SchoolSvg} alt="" />
			</span>
		</svelte:fragment>
		<p class="text-base font-normal text-gray-500 dark:text-gray-400">
			Part of the Telekom Talent Program since November 2025.
		</p>
	</TimelineItem>
</Timeline>
