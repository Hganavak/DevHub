# DevHub-Web

The web component of the DevHub stack.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Planned Features
	- Link to GitHub
	- Based on SkillTree project
	- Link to projects &&/|| individual commits for each skill
	- Rank your skills in each area/developer summary
	- CV
	- Previous experience
	- Cover letter
	- When tagging code associate it with previous jobs
	- Personal projects 

## Planned Technologies
	- Angular
	- MySQL?
	- Spring
	- Apache

## Tasks
	[x] Git init
	[x] Initialize Angular project
	[x] Decide on the main components
	[x] Get home page to link to Another module

## Planned Project Structure
- Components 
	- User
		*~ Skill Tree
		*~ Jobs
		*~ Contributions
		*~ Visualizations
		- CV
		- Bio
			* Username
			* Name
			* Job title
			* Jobs[]
		- Job
			~ Projects
			- SkillSummaries
		- Contribution	
			* Description
			*~ Job

			- Project
				- Github/Gitlab
				*~ CodeBlocks[]
				*~ Screenshots[]
			- CodeBlock
				~ Project
			- Screenshot
				~ Project
			- Textual
				~ Project
		- SkillTree
			~* Skills[]

			- Skill
				* Examples[]
					* Description
					~ Contribution
		- SkillVisualizations
			- SkillBarGraph
			- SkillMatrix
		- Profile
			- Layout (components can be rearranged)
	- Search
	- Login
- Services
	- AuthService	
	- SearchService
	- ProfileEditorService
