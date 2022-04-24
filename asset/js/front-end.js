// Because this assignment is focused on the front-end of the application, JS is only used to expedite the process - not
// to generate true content, but to generate the appearance of content. As such, several sample JSON objects are
// included to mimic the MongoDB collections that will be included in our full-stack iteration of this application.

const user = {
	u00000000: {
		id: {
			user: 			'u00000000',
			creator: 		'c00000000'
		},

		name: {
			first:			'Nicholas',
			last:			'Caporusso'
		},

		account: {
			email: 			'caporusson1@nku.edu',
			password:		'password',
			type:			'creator'
		},

		profile: {
			username:		'nicholascaporusso',
			avatar:			'https://i.imgur.com/wWbeuk9.jpg'
		},

		curation: {
			creator: 		[ 'c00000000', 'c00000001' ],
			category:		[ 'computer science', 'exercise science', 'psychology' ],
			keyword:		[ 'ieee', 'human-computer interaction', 'kinesiology', 'calisthenic' ],
			podcast:		[ 'p00000000', 'p00000002', 'p00000004' ]
		}
	},

	u00000001: {
		id: {
			user: 			'u00000001',
			creator: 		'c00000001'
		},

		name: {
			first:			'Gabe',
			last:			'Sanders'
		},

		account: {
			email: 			'sandersg1@nku.edu',
			password:		'password',
			type:			'creator'
		},

		profile: {
			username:		'gabrielsanders15',
			avatar:			'https://i.imgur.com/tMtziWc.jpg'
		},

		curation: {
			creator: 		[ 'c00000000', 'c00000001' ],
			category:		[ 'computer science', 'exercise science', 'psychology' ],
			keyword:		[ 'ieee', 'human-computer interaction', 'kinesiology', 'calisthenic' ],
			podcast:		[ 'p00000000', 'p00000002', 'p00000004' ]
		}
	},

	u00000002: {
		id: {
			user: 			'u00000002',
			creator: 		null
		},

		name: {
			first:			'Michael',
			last:			'Muzzarelli'
		},

		account: {
			email: 			'muzzarellm1@nku.edu',
			password:		'password',
			type:			'user'
		},

		profile: {
			username:		'muzzarellimj',
			avatar:			'https://i.imgur.com/iza0pJ4.jpg'
		},

		curation: {
			creator: 		[ 'c00000000', 'c00000001' ],
			category:		[ 'computer science', 'exercise science', 'psychology' ],
			keyword:		[ 'ieee', 'human-computer interaction', 'kinesiology', 'calisthenic' ],
			podcast:		[ 'p00000000', 'p00000002', 'p00000004' ]
		}
	}
}

const creator = {
	c00000000: {
		id: {
			user: 			'u00000000',
			creator: 		'c00000000',
			researcher: 	'0000-0002-8661-4868'
		},

		affiliation: {
			position:		'Assistant Professor of Computer Science',
			institution: 	'Northern Kentucky University',
			email:			'caporusson1@nku.edu',
			link:			'https://nku.edu/academics/informatics/programs/computerscience/CSC%20People.html#nku-letter-c'
		},

		profile: {
			about: 			'I believe software engineering tools, methodologies, philosophies, design approaches, systems thinking, and processes can be used to to solve broader types of problems outside software development—individual, team, and even country development.'
		},

		social: {
			github:			'https://github.com/NicholasCaporusso',
			googleScholar:	'https://scholar.google.co.in/citations?user=4T9RQfcAAAAJ&hl=en',
			linkedin: 		'https://www.linkedin.com/in/nicholascaporusso/',
			researchGate:	'https://www.researchgate.net/profile/Nicholas-Caporusso',
			twitter:		'https://twitter.com/cprnhl'
		},

		content: {
			creator:		[],
			contributor:	[]
		},

		curation: {
			category:		[ 'computer science', 'data science' ],
			keyword:		[ 'ieee', 'human-computer interaction' ]
		},

		metric: {
			creator: {
				follow:		[ ]
			},

			podcast: {
				like:		[ ],
				bookmark:	[ ]
			}
		}
	},

	c00000001: {
		id: {
			user: 			'u00000001',
			creator: 		'c00000001',
			researcher: 	'0000-0002-8324-3176'
		},

		affiliation: {
			position:		'MSES Graduate Program Director',
			institution: 	'Northern Kentucky University',
			email:			'sandersg1@nku.edu',
			link:			'https://www.linkedin.com/in/gabrielsanders15/'
		},

		profile: {
			about: 			'I specialize in sports science research design and proper analysis of internal and external workload data to help coaches better understand the demands of their respective sport and the impact it can have on their athletes.'
		},

		social: {
			googleScholar:	'https://scholar.google.com/citations?user=HWX-6IIAAAAJ&hl=en',
			linkedin: 		'https://www.linkedin.com/in/gabrielsanders15/',
			researchGate:	'https://www.researchgate.net/profile/Gabriel-Sanders-2',
			twitter:		'https://twitter.com/gabejsanders'
		},

		content: {
			creator:		[],
			contributor:	[]
		},

		curation: {
			category:		[ 'exercise science', 'psychology' ],
			keyword:		[ 'kinesiology', 'calisthenic' ],
		},

		metric: {
			creator: {
				follow:		[ ]
			},

			podcast: {
				like:		[ ],
				bookmark:	[ ]
			}
		}
	}
}

const podcast = {
	p00000000: {
		id: {
			podcast:		'p00000000',
			creator: 		'c00000000',
			object:			'10.1007/978-3-030-80744-3_77'
		},

		publication: {
			title:			'Face Masks as Awareness and Engagement Platforms',
			author:			[ { name: 'Leo Christen' }, { name: 'Tami Farber' }, { name: 'Nicholas Caporusso', email: 'caporusson1@nku.edu' } ],
			abstract:		'The COVID-19 pandemic required the adoption of several health-safety practices that have been demonstrated to be crucial for limiting the spread of the virus, including the use of personal protection equipment (PPE). Particularly, face masks have become a ubiquitous component of our daily lives. However, despite their effectiveness, they have several drawbacks. In addition to being uncomfortable for many users, they entirely cover the mouth, which, in turn, poses limitations to non-verbal communication and interpersonal interaction. In this paper, we present the user-centered design process of a solution that augments face masks with additional features that support interaction, awareness, and engagement.',
			source:			'Springer',
			date:			'2021-07-08'
		},

		content: {
			audio:			'',
			audioDuration:	'14:23',
			category:		'computer science',
			keyword:		[ 'pandemic', 'personal protection equipment', 'human-computer interaction' ],
			date:			'2022-04-23'
		},

		metric: {
			podcast: {
				like:		[ ],
				bookmark:	[ ]
			}
		}
	},

	p00000001: {
		id: {
			podcast:		'p00000001',
			creator: 		'c00000000',
			object:			'10.1007/978-3-030-51549-2_55'
		},

		publication: {
			title:			'The Impact of Social Media in Military Recruiting',
			author:			[ { name: 'Angel Peralta', email: 'agperalta@mail.fhsu.edu' }, { name: 'Nicholas Caporusso', email: 'caporusson1@nku.edu' } ],
			abstract:		'Given the growing success and user base of Social Media websites and, specifically, Social Networks, over the last decade, businesses have transitioned from traditional advertising to digital platforms. Specifically, their audience targeting features make it very easy to promote products and services to defined groups of individuals with specific characteristics. As a result, in addition to standard advertising, organizations, including educational institutions, started using personal and professional Social Networks (e.g., Facebook, Instagram, and LinkedIn) as a recruiting tool for reaching potential candidates and interacting with them in a quick informal fashion. In this paper, we explore the human factors in the use of Social Media in recruiting for the Army and we detail the results of a study in which we compared the perspective of recruiters and prospect cadets, especially in the context of initiatives, such as the Delayed Entry Program (DEP).',
			source:			'Springer',
			date:			'2020-07-02'
		},

		content: {
			audio:			'',
			audioDuration:	'12:10',
			category:		'computer science',
			keyword:		[ 'social media', 'recruiting', 'military', 'delayed entry program' ],
			date:			'2022-04-23'
		},

		metric: {
			podcast: {
				like:		[ ],
				bookmark:	[ ]
			}
		}
	},

	p00000002: {
		id: {
			podcast:		'p00000002',
			creator: 		'c00000000',
			object:			'10.1007/978-3-030-50896-8_1'
		},

		publication: {
			title:			'A Platform for Tracking Teacher-Student Interaction',
			author:			[ { name: 'Nicholas Elleman', email: 'ellemann1@mymail.nku.edu' }, { name: 'Nicholas Caporusso', email: 'caporusson1@nku.edu' } ],
			abstract:		'The value and effectiveness of office hours held by faculty and other staff members involved in student mentoring (e.g., advisors and tutors) has been investigated by several studies that have demonstrated that One-On-One (1:1) interaction, whether in person or via remote communication tools, has significant impact on academic success. Despite teacher-student meetings are a crucial component of the learning experience, very little is known about office hours practices beyond the requirements of faculty and staff handbooks: attendance, utilization, and outcome are seldom reported or sparsely tracked, mostly on an individual basis, and without standards. In this paper, we introduce a novel system especially designed for educational institutions to support them in measuring and enhancing engagement with office hours and mentoring sessions.',
			source:			'Springer',
			date:			'2020-07-01'
		},

		content: {
			audio:			'',
			audioDuration:	'13:10',
			category:		'computer science',
			keyword:		[ 'learning analytics', 'office hours', 'learning management system' ],
			date:			'2022-04-23'
		},

		metric: {
			podcast: {
				like:		[ ],
				bookmark:	[ ]
			}
		}
	},

	p00000003: {
		id: {
			podcast:		'p00000003',
			creator: 		'c00000001',
			object:			'10.53520/rdsp2022.10533'
		},

		publication: {
			title:			'A Platform for Tracking Teacher-Student Interaction',
			author:			[ { name: 'Gabriel Sanders', email: 'sandersg1@nku.edu' }, { name: 'Corey Peacock', email: 'cpeacock@nova.edu' } ],
			abstract:		'The maximum workload range (max range) is a concept suggested by Sanders et al.1 regarding a method used to prescribe adequate practice workloads based off wearable technology data. While the example provided utilizes total distance, the max range can be applied to key performance indicators such as  high-speed distance, training load, jumps, etc. that are tracked throughout the competitive season in team sports. The max range concept was developed from research that found 12-17% of the time, football athletes, depending on position, accumulated game workloads outside their position’s mean + 1SD. Anecdotally, many coaches and practitioners use simple game averages as a control for ideal practice volumes. Based on previous research, using the game average as control training threshold may result in some high performing athletes being under-conditioned. It is reasonable to suggest that potential compound effects may occur throughout an entire season if athletes are not engaging in rigorous training loads that mimic game-like volumes and intensities.',
			source:			'Research Directs in Strength and Performance',
			date:			'2022-01-20'
		},

		content: {
			audio:			'',
			audioDuration:	'19:34',
			category:		'exercise science',
			keyword:		[ 'workload', 'overtraining', 'training load' ],
			date:			'2022-04-23'
		},

		metric: {
			podcast: {
				like:		[ ],
				bookmark:	[ ]
			}
		}
	},

	p00000004: {
		id: {
			podcast:		'p00000004',
			creator: 		'c00000001',
			object:			'10.53520/rdhs2022.10431'
		},

		publication: {
			title:			'Physical Activity and Exercise for Optimal Disease Prevention: Clinical Evidence',
			author:			[ { name: 'Gabriel Sanders', email: 'sandersg1@nku.edu' } ],
			abstract:		'Previous physical activity guidelines from health organizations provide general physical activity and exercise intensity and duration recommendations. These guidelines have experienced very little change over the last two decades, despite significant changes in technology, more specifically wearable technology. The guidelines typical refer to exercise intensity as low, moderate and vigorous intensity based on a metabolic equivalent scale (MET) or a subjective scale. With wearable technology being accessible, affordable, reliable, and accurate, more attention should be given address recommendations that are multifaceted and specific. Most wearable technology can easily track sleep, steps, calories, hear rate, and exercise time within certain heart rate training zones. Research has shown that monitoring exercise and physical activity with wearable technology can improve health outcomes.',
			source:			'Research Directs in Health Sciences',
			date:			'2022-01-10'
		},

		content: {
			audio:			'',
			audioDuration:	'16:53',
			category:		'exercise science',
			keyword:		[ 'preventative treatment', 'exercise' ],
			date:			'2022-04-23'
		},

		metric: {
			podcast: {
				like:		[ ],
				bookmark:	[ ]
			}
		}
	},

	p00000005: {
		id: {
			podcast:		'p00000005',
			creator: 		'c00000001',
			object:			'10.53520/rdpb2021.10724'
		},

		publication: {
			title:			'Considerations for Reporting Positive or Negative Findings in Psychology and Behavioral Research',
			author:			[ { name: 'Daniel Maitland', email: 'dwmaitland@moreheadstate.edu' }, { name: 'Gabriel Sanders', email: 'sandersg1@nku.edu' } ],
			abstract:		'Research Directs aims to provide authors at research and non-research institutions with an open access platform for scientific discovery that reduces cost barriers associated with traditional open access publishers. Research Directs in Psychology and Behavior (RDPB) has a moderately broad scope and the journal aims to enhance negative and positive findings1 in the psychology and behavioral sciences. Topics can include, but are not limited to the following categories: behavioral, clinical, industrial, forensic and environmental psychology, mental health, addictions, counseling, psychiatric treatment and outcomes and many more topics in the field.',
			source:			'Research Directs in Psychology and Behavior',
			date:			'2021-11-20'
		},

		content: {
			audio:			'',
			audioDuration:	'17:45',
			category:		'psychology',
			keyword:		[ 'behavior', 'significance' ],
			date:			'2022-04-23'
		},

		metric: {
			podcast: {
				like:		[ ],
				bookmark:	[ ]
			}
		}
	}
}

const category = {
	'Humanities': {
		'Performing Arts': 			0,
		'Visual Arts': 				0,
		'History': 					0,
		'Language': 				0,
		'Literature': 				0,
		'Law': 						0,
		'Philosophy': 				0,
		'Theology':					0
	},

	'Social Science': {
		'Anthropology':				0,
		'Archaeology':				0,
		'Economics':				0,
		'Geography':				0,
		'Political Science':		0,
		'Psychology':				0,
		'Sociology':				0,
		'Social Work':				0
	},

	'Natural Science': {
		'Biology':					0,
		'Chemistry':				0,
		'Earth Science':			0,
		'Space Science':			0,
		'Physics':					0
	},

	'Formal Science': {
		'Computer Science':			0,
		'Mathematics':				0
	},

	'Applied Science': {
		'Agriculture':				0,
		'Architecture':				0,
		'Business':					0,
		'Divinity':					0,
		'Education':				0,
		'Chemical Engineering':		0,
		'Civil Engineering':		0,
		'Electrical Engineering':	0,
		'Materials Science':		0,
		'Mechanical Engineering':	0,
		'Environmental Science':	0,
		'Consumer Science':			0,
		'Exercise Science':			0,
		'Communication':			0,
		'Library Studies':			0,
		'Medicine and Health':		0,
		'Military Science':			0,
		'Public Administration':	0,
		'Transportation':			0
	}
}