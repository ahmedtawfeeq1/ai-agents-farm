import { motion } from 'framer-motion';
import { useState } from 'react';
import { Search, ChevronUp, X, ArrowRightCircle } from 'lucide-react';


// SVG graphics enhanced with gradients and modern style
const KnowledgeGraphic = () => (
  <svg viewBox="0 0 200 120" className="w-full h-32">
    <defs>
      <linearGradient id="blueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.2" />
        <stop offset="100%" stopColor="#60A5FA" stopOpacity="0.1" />
      </linearGradient>
    </defs>
    <rect x="20" y="20" width="160" height="80" rx="8" fill="#EBF5FF" stroke="#3B82F6" strokeWidth="2" />
    <circle cx="60" cy="60" r="20" fill="url(#blueGrad)" />
    <path d="M40 80 L160 80" stroke="#3B82F6" strokeWidth="2" strokeDasharray="4,4" />
    <circle cx="140" cy="40" r="15" fill="#3B82F6" opacity="0.15" />
  </svg>
);

const ActionGraphic = () => (
  <svg viewBox="0 0 200 120" className="w-full h-32">
    <defs>
      <linearGradient id="greenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#059669" stopOpacity="0.2" />
        <stop offset="100%" stopColor="#34D399" stopOpacity="0.1" />
      </linearGradient>
    </defs>
    <rect x="20" y="20" width="160" height="80" rx="8" fill="#ECFDF5" stroke="#059669" strokeWidth="2" />
    <path d="M40 60 L160 60" stroke="#059669" strokeWidth="2" strokeDasharray="5,5" />
    <circle cx="100" cy="60" r="25" fill="url(#greenGrad)" />
    <path d="M70 40 L130 80" stroke="#059669" strokeWidth="2" />
  </svg>
);

const AutomationGraphic = () => (
  <svg viewBox="0 0 200 120" className="w-full h-32">
    <defs>
      <linearGradient id="redGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#DC2626" stopOpacity="0.2" />
        <stop offset="100%" stopColor="#F87171" stopOpacity="0.1" />
      </linearGradient>
    </defs>
    <rect x="20" y="20" width="160" height="80" rx="8" fill="#FEF2F2" stroke="#DC2626" strokeWidth="2" />
    <path d="M40 40 C70 40, 130 80, 160 80" stroke="#DC2626" strokeWidth="2" fill="none" />
    <circle cx="100" cy="60" r="20" fill="url(#redGrad)" />
    <path d="M60 80 L140 40" stroke="#DC2626" strokeWidth="2" strokeDasharray="4,4" />
  </svg>
);
// Define animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};


const AGENTS_DATA = {
  // KNOWLEDGE AGENTS (12)
  "Research Assistant": {
description: "A comprehensive research tool for information aggregation and synthesis.",
type: "Knowledge Agent",
useCase: "Efficiently gather and analyze information from multiple sources.",
detailedDescription: "Advanced AI system that scans academic databases, publications, and archives to extract insights and provide comprehensive research summaries.",
industries: "Professional Services, Consulting Services, Education, Corporate Training",
jobFunctions: "Marketing Analysts, IT Analysts, Project Managers, Strategists",
category: "Research & Analysis"
  },
  "Proposal/RFP Creator": {
description: "Intelligent proposal and RFP response generator.",
type: "Knowledge Agent",
useCase: "Create professional proposals and bid responses efficiently.",
detailedDescription: "Analyzes requirements and generates tailored proposals using company data and industry best practices.",
industries: "Professional Services, Consulting Services, Corporate Training, Legal",
jobFunctions: "Project Managers, Account Managers, Strategists, Sales Managers",
category: "Document Creation"
  },
  "Strategy/Business Plan Builder": {
description: "Strategic business planning and documentation system.",
type: "Knowledge Agent",
useCase: "Develop comprehensive business plans and strategies.",
detailedDescription: "Creates detailed business plans incorporating market analysis, financial projections, and strategic frameworks.",
industries: "Professional Services, Finance, Corporate Training",
jobFunctions: "Executives, Strategists, Product Managers, Project Managers",
category: "Strategic Planning"
  },
  "Strategy Report Generator": {
description: "Strategic analysis and reporting system.",
type: "Knowledge Agent",
useCase: "Generate detailed strategy and market analysis reports.",
detailedDescription: "Produces comprehensive strategy documents with market insights and recommendations.",
industries: "Marketing, Professional Services, Consulting Services",
jobFunctions: "Marketing Analysts, Strategists, Project Managers",
category: "Strategic Planning"
  },
  "Performance Report Generator": {
description: "Performance analysis and reporting tool.",
type: "Knowledge Agent",
useCase: "Create detailed performance analysis reports.",
detailedDescription: "Analyzes performance data to generate insights and recommendations.",
industries: "IT, Operations, Finance, Corporate Training",
jobFunctions: "Project Managers, Operations Managers, IT Specialists, Marketing Analysts",
category: "Analytics"
  },
  "Minutes of Meeting Creator": {
description: "Automated meeting minutes generator.",
type: "Knowledge Agent",
useCase: "Generate structured meeting minutes and summaries.",
detailedDescription: "Creates organized meeting minutes with action items and key decisions.",
industries: "Professional Services, Education, Corporate Training",
jobFunctions: "Project Managers, Talents Onboarding Specialists, Executives, Coordinators",
category: "Documentation"
  },
  "Visual Content Generator": {
description: "Professional visual content creation tool.",
type: "Knowledge Agent",
useCase: "Create engaging visual content and presentations.",
detailedDescription: "Generates visual content with consistent branding and design principles.",
industries: "Marketing, Creative Design, Media",
jobFunctions: "Graphic Designers, Content Creators, Social Media Managers",
category: "Content Creation"
  },
  "Explainer Content GPT": {
description: "Educational content creation assistant.",
type: "Knowledge Agent",
useCase: "Create clear explanatory content and tutorials.",
detailedDescription: "Transforms complex topics into accessible, engaging content.",
industries: "Education, Corporate Training, Marketing",
jobFunctions: "Trainers, Content Creators, Marketers, Social Media Managers",
category: "Education"
  },
  "Training Knowledge Builder": {
description: "Training material development system.",
type: "Knowledge Agent",
useCase: "Create comprehensive training materials.",
detailedDescription: "Develops structured training content and assessment materials.",
industries: "Education, Corporate Training, Professional Services",
jobFunctions: "Trainers, Content Creators, Project Managers",
category: "Training"
  },
  "Task Allocation Planner": {
description: "Intelligent task distribution system.",
type: "Knowledge Agent",
useCase: "Optimize task allocation and workload management.",
detailedDescription: "Plans optimal task distribution based on team capacity and skills.",
industries: "Operations, Project Management, Corporate Training",
jobFunctions: "Project Managers, Operations Managers, Team Leads",
category: "Project Management"
  },
  "Quality Control Agent": {
description: "Content and product quality assessment tool.",
type: "Knowledge Agent",
useCase: "Ensure quality standards in deliverables.",
detailedDescription: "Reviews and assesses quality against defined standards.",
industries: "Manufacturing, Creative Design, Media",
jobFunctions: "Graphic Designers, Content Creators, Quality Control Specialists",
category: "Quality Assurance"
  },
  "Personal Branding Content Creator": {
description: "Personal brand content development system.",
type: "Knowledge Agent",
useCase: "Create consistent personal branding content.",
detailedDescription: "Generates brand-aligned content across various platforms.",
industries: "Marketing, Personal Development, Creative Design",
jobFunctions: "Content Creators, Marketers, Social Media Managers",
category: "Branding"
  },
  // ACTION AGENTS (12)
"AI Calendar Assistant": {
  description: "Intelligent calendar management system.",
  type: "Action Agent",
  useCase: "Optimize scheduling and calendar management.",
  detailedDescription: "Manages calendars, resolves scheduling conflicts, and sends reminders to optimize time management.",
  industries: "Professional Services, Corporate Training, Education",
  jobFunctions: "Executives, Managers, Talents Onboarding Specialists, Project Managers",
  category: "Productivity"
  },
  "Task Reporting Assistant": {
  description: "Task progress tracking system.",
  type: "Action Agent",
  useCase: "Monitor and report on task progress.",
  detailedDescription: "Tracks task status, updates completion progress, and provides insights into bottlenecks and delays.",
  industries: "Operations, IT, Project Management",
  jobFunctions: "Operations Managers, Project Managers, Team Leads",
  category: "Project Management"
  },
  "Meeting Assistant": {
  description: "Meeting management and follow-up system.",
  type: "Action Agent",
  useCase: "Manage meeting logistics and follow-up.",
  detailedDescription: "Automates meeting coordination, captures notes, and assigns follow-up tasks post-meeting.",
  industries: "Professional Services, Consulting Services, Education",
  jobFunctions: "Executives, Project Managers, Assistants, Coordinators",
  category: "Collaboration"
  },
  "Team Monitoring Assistant": {
  description: "Team performance tracking system.",
  type: "Action Agent",
  useCase: "Monitor team productivity and engagement.",
  detailedDescription: "Tracks team performance metrics, identifies productivity gaps, and provides insights for improvements.",
  industries: "IT, Operations, Corporate Training",
  jobFunctions: "Operations Managers, IT Specialists, Team Leads",
  category: "Management"
  },
  "Study Assistant": {
  description: "Learning support and organization tool.",
  type: "Action Agent",
  useCase: "Optimize study sessions and learning.",
  detailedDescription: "Creates personalized study plans, organizes content, and tracks progress for educators and learners.",
  industries: "Education, Corporate Training",
  jobFunctions: "Trainers, Content Creators, Talents Onboarding Specialists",
  category: "Education"
  },
  "Content Planning Assistant": {
  description: "Content strategy automation tool.",
  type: "Action Agent",
  useCase: "Plan and organize content creation.",
  detailedDescription: "Manages content calendars, organizes workflows, and aligns output with marketing strategies.",
  industries: "Marketing, Creative Design, Media",
  jobFunctions: "Content Creators, Marketers, Social Media Managers",
  category: "Content"
  },
  "Ticketing Assistant": {
  description: "Support ticket management system.",
  type: "Action Agent",
  useCase: "Manage and prioritize support tickets.",
  detailedDescription: "Automates ticket creation, routing, and resolution to improve customer support efficiency.",
  industries: "Customer Service, IT, Operations",
  jobFunctions: "Customer Success Managers, IT Specialists, Support Agents",
  category: "Support"
  },
  "HR Onboarding Agent": {
  description: "Employee onboarding automation system.",
  type: "Action Agent",
  useCase: "Streamline employee onboarding process.",
  detailedDescription: "Automates onboarding tasks, including document collection, training schedules, and progress tracking.",
  industries: "Corporate Training, HR, Professional Services",
  jobFunctions: "Talents Onboarding Specialists, HR Professionals, Trainers",
  category: "HR"
  },
  "Performance Manager": {
  description: "Employee performance management tool.",
  type: "Action Agent",
  useCase: "Track and manage employee performance.",
  detailedDescription: "Monitors performance metrics, provides evaluations, and recommends areas for improvement.",
  industries: "Operations, IT, Corporate Training",
  jobFunctions: "Operations Managers, Team Leads, Project Managers",
  category: "Management"
  },
  "Sales Team Notification Agent": {
  description: "Sales activity notification system.",
  type: "Action Agent",
  useCase: "Keep sales teams updated on activities.",
  detailedDescription: "Sends real-time notifications about sales activities, updates, and opportunities.",
  industries: "Sales, Marketing, Events Management",
  jobFunctions: "Sales Managers, Sales Representatives, Account Managers",
  category: "Sales"
  },
  "Lead Generation Assistant": {
  description: "Lead identification and qualification tool.",
  type: "Action Agent",
  useCase: "Identify and qualify potential leads.",
  detailedDescription: "Automates lead discovery, qualifies prospects, and prioritizes opportunities for outreach.",
  industries: "Marketing, Sales, Professional Services",
  jobFunctions: "Sales Representatives, Marketers, Account Managers",
  category: "Sales"
  },
  "Product Management Assistant": {
  description: "Product development management system.",
  type: "Action Agent",
  useCase: "Manage product development workflow.",
  detailedDescription: "Coordinates product development tasks, tracks timelines, and ensures alignment with goals.",
  industries: "IT, Project Management, Operations",
  jobFunctions: "Product Managers, Project Managers, Operations Managers",
  category: "Product"
  },
  // AUTOMATION WORKFLOWS (14)
  "CRM to WhatsApp/Telegram": {
description: "CRM messaging integration system.",
type: "Automation Workflow",
useCase: "Automate messaging between CRM systems and messaging platforms.",
detailedDescription: "Integrates CRM data with messaging tools like WhatsApp and Telegram to automate customer communication, ensuring timely follow-ups and notifications for improved engagement and response rates.",
industries: "Sales, Marketing, Customer Service",
jobFunctions: "Sales Representatives, Marketers, Customer Success Managers",
category: "Integration"
  },
  "Reports Automation": {
description: "Automated reporting system.",
type: "Automation Workflow",
useCase: "Automate report generation and distribution.",
detailedDescription: "Automatically collects data from various sources, generates insightful reports, and distributes them to stakeholders on a scheduled basis for enhanced decision-making.",
industries: "Finance, IT, Operations",
jobFunctions: "Analysts, Operations Managers, Project Managers",
category: "Reporting"
  },
  "Lead Transfer Workflow": {
description: "Lead routing automation system.",
type: "Automation Workflow",
useCase: "Automate lead distribution and transfer processes.",
detailedDescription: "Routes incoming leads to appropriate sales representatives or teams based on predefined rules like region, priority, or workload to maximize lead conversion efficiency.",
industries: "Sales, CRM Management, Marketing",
jobFunctions: "Sales Managers, Sales Representatives, Account Managers",
category: "Sales"
  },
  "Ad Account Notifications": {
description: "Advertising performance monitoring.",
type: "Automation Workflow",
useCase: "Monitor ad account metrics and notify teams.",
detailedDescription: "Tracks ad performance across campaigns, identifies anomalies, and sends real-time notifications to ensure advertising effectiveness and quick decision-making.",
industries: "Marketing, Advertising, Media",
jobFunctions: "Ad Managers, Marketers, Social Media Managers",
category: "Advertising"
  },
  "Trend-to-Content Planner": {
description: "Trend-based content automation system.",
type: "Automation Workflow",
useCase: "Generate content plans based on trending topics.",
detailedDescription: "Scans trending topics across platforms and automates the creation of content plans to align with audience interests and improve engagement rates.",
industries: "Marketing, Creative Design, Media",
jobFunctions: "Content Creators, Content Strategists, Marketers",
category: "Content"
  },
  "Event Tracker Automation": {
description: "Event performance tracking and monitoring tool.",
type: "Automation Workflow",
useCase: "Track and report on event metrics and engagement.",
detailedDescription: "Automates the collection and analysis of event data, tracking engagement, attendance, and ROI to generate actionable insights for event organizers.",
industries: "Events Management, Marketing, Corporate Training",
jobFunctions: "Event Managers, Coordinators, Project Managers",
category: "Events"
  },
  "Automated Email Actions": {
description: "Email automation and response system.",
type: "Automation Workflow",
useCase: "Automate email workflows and sequences.",
detailedDescription: "Manages automated email campaigns, responses, and follow-ups to improve efficiency in communication and lead nurturing workflows.",
industries: "Sales, Marketing, IT",
jobFunctions: "Sales Representatives, IT Specialists, Marketers",
category: "Communication"
  },
  "LinkedIn/Email Outreach": {
description: "Multi-channel outreach automation system.",
type: "Automation Workflow",
useCase: "Automate professional networking outreach.",
detailedDescription: "Integrates LinkedIn and email platforms to streamline outreach processes, ensuring efficient engagement with leads, clients, or partners.",
industries: "Sales, Marketing, Professional Services",
jobFunctions: "Sales Representatives, Marketers, Outreach Specialists",
category: "Outreach"
  },
  "Legal Document Automation": {
description: "Legal document processing system.",
type: "Automation Workflow",
useCase: "Automate legal document workflows and processing.",
detailedDescription: "Automates document creation, review, and approval processes, ensuring compliance with legal standards and improving document management efficiency.",
industries: "Legal, Corporate, Professional Services",
jobFunctions: "Legal Teams, Project Managers, HR Professionals",
category: "Legal"
  },
  "Task Reminders Workflow": {
description: "Task reminder automation system.",
type: "Automation Workflow",
useCase: "Automate task reminders and follow-up notifications.",
detailedDescription: "Schedules automated reminders for tasks and follow-ups, ensuring team members meet deadlines and project milestones efficiently.",
industries: "Project Management, Operations, IT",
jobFunctions: "Project Managers, Operations Managers, Team Leads",
category: "Productivity"
  },
  "Idea and Brainstorming Automation": {
description: "Automated brainstorming and ideation system.",
type: "Automation Workflow",
useCase: "Streamline idea generation and management.",
detailedDescription: "Facilitates idea collection, organizes brainstorming sessions, and prioritizes innovative concepts for implementation.",
industries: "Creative Design, Corporate, Startups",
jobFunctions: "Strategists, Content Creators, Marketers",
category: "Innovation"
  },
  "Auto-Posting Workflow": {
description: "Social media content posting automation.",
type: "Automation Workflow",
useCase: "Automate social media posting schedules.",
detailedDescription: "Schedules and publishes pre-approved social media posts across multiple platforms to maintain consistent brand presence and engagement.",
industries: "Marketing, Social Media, Creative Design",
jobFunctions: "Social Media Managers, Content Creators, Marketers",
category: "Social Media"
  },
  "KPI Monitoring Automation": {
description: "KPI tracking and monitoring system.",
type: "Automation Workflow",
useCase: "Automate KPI tracking and performance alerts.",
detailedDescription: "Continuously monitors key performance indicators, generates reports, and triggers alerts when performance deviates from targets.",
industries: "Operations, IT, Corporate",
jobFunctions: "Operations Managers, Analysts, IT Specialists",
category: "Analytics"
  },
  "Event-Based Task Creation": {
description: "Event-triggered task automation tool.",
type: "Automation Workflow",
useCase: "Generate tasks based on predefined system events.",
detailedDescription: "Automatically creates and assigns tasks triggered by specific events, ensuring timely response and task execution.",
industries: "Project Management, IT, Operations",
jobFunctions: "Project Managers, IT Specialists, Operations Managers",
category: "Workflow"
  },
  "Customer Success Monitoring": {
    description: "Automated customer lifecycle milestone management.",
    type: "Automation Workflow",
    useCase: "Track and respond to key customer lifecycle events.",
    detailedDescription: "Monitors customer journey milestones and triggers appropriate actions based on usage patterns, engagement levels, and success metrics. Automatically identifies critical touchpoints such as first value moment, renewal dates, usage milestones, and potential churn indicators.",
    industries: "SaaS, Technology, Subscription Services, Professional Services",
    jobFunctions: "Customer Success Managers, Account Managers, Sales Teams",
    category: "Customer Success"
  }
} 
// Complete agents data constant
// const AGENTS_DATA = {
//   // KNOWLEDGE AGENTS (12)
//   "Research Assistant": {
//     description: "A comprehensive research tool for information aggregation and synthesis.",
//     type: "Knowledge Agent",
//     useCase: "Efficiently gather and analyze information from multiple sources.",
//     detailedDescription: "Advanced AI system that scans academic databases, publications, and archives to extract insights and provide comprehensive research summaries.",
//     industries: "Research, Consulting, Education",
//     jobFunctions: "Analysts, Researchers, Consultants",
//     category: "Research & Analysis"
//   },
//   "Proposal/RFP Creator": {
//     description: "Intelligent proposal and RFP response generator.",
//     type: "Knowledge Agent",
//     useCase: "Create professional proposals and bid responses efficiently.",
//     detailedDescription: "Analyzes requirements and generates tailored proposals using company data and industry best practices.",
//     industries: "Consulting, Corporate, Government",
//     jobFunctions: "Business Development, Proposal Writers",
//     category: "Document Creation"
//   },
//   "Strategy/Business Plan Builder": {
//     description: "Strategic business planning and documentation system.",
//     type: "Knowledge Agent",
//     useCase: "Develop comprehensive business plans and strategies.",
//     detailedDescription: "Creates detailed business plans incorporating market analysis, financial projections, and strategic frameworks.",
//     industries: "Corporate, Startups, Finance",
//     jobFunctions: "Strategists, Business Planners, Executives",
//     category: "Strategic Planning"
//   },
//   "Strategy Report Generator": {
//     description: "Strategic analysis and reporting system.",
//     type: "Knowledge Agent",
//     useCase: "Generate detailed strategy and market analysis reports.",
//     detailedDescription: "Produces comprehensive strategy documents with market insights and recommendations.",
//     industries: "Marketing, Corporate, Consulting",
//     jobFunctions: "Marketing Analysts, Strategists",
//     category: "Strategic Planning"
//   },
//   "Performance Report Generator": {
//     description: "Performance analysis and reporting tool.",
//     type: "Knowledge Agent",
//     useCase: "Create detailed performance analysis reports.",
//     detailedDescription: "Analyzes performance data to generate insights and recommendations.",
//     industries: "Corporate, IT, Finance",
//     jobFunctions: "Project Managers, Operations, Analysts",
//     category: "Analytics"
//   },
//   "Minutes of Meeting Creator": {
//     description: "Automated meeting minutes generator.",
//     type: "Knowledge Agent",
//     useCase: "Generate structured meeting minutes and summaries.",
//     detailedDescription: "Creates organized meeting minutes with action items and key decisions.",
//     industries: "Corporate, Non-Profit, Education",
//     jobFunctions: "Project Managers, Assistants, Coordinators",
//     category: "Documentation"
//   },
//   "Visual Content Generator": {
//     description: "Professional visual content creation tool.",
//     type: "Knowledge Agent",
//     useCase: "Create engaging visual content and presentations.",
//     detailedDescription: "Generates visual content with consistent branding and design principles.",
//     industries: "Marketing, Media, Design",
//     jobFunctions: "Graphic Designers, Content Creators",
//     category: "Content Creation"
//   },
//   "Explainer Content GPT": {
//     description: "Educational content creation assistant.",
//     type: "Knowledge Agent",
//     useCase: "Create clear explanatory content and tutorials.",
//     detailedDescription: "Transforms complex topics into accessible, engaging content.",
//     industries: "Education, Marketing, Media",
//     jobFunctions: "Educators, Marketers, Content Developers",
//     category: "Education"
//   },
//   "Training Knowledge Builder": {
//     description: "Training material development system.",
//     type: "Knowledge Agent",
//     useCase: "Create comprehensive training materials.",
//     detailedDescription: "Develops structured training content and assessment materials.",
//     industries: "Education, Corporate Training",
//     jobFunctions: "Trainers, HR Professionals",
//     category: "Training"
//   },
//   "Task Allocation Planner": {
//     description: "Intelligent task distribution system.",
//     type: "Knowledge Agent",
//     useCase: "Optimize task allocation and workload management.",
//     detailedDescription: "Plans optimal task distribution based on team capacity and skills.",
//     industries: "Corporate, Project Management",
//     jobFunctions: "Project Managers, Team Leads",
//     category: "Project Management"
//   },
//   "Quality Control Agent": {
//     description: "Content and product quality assessment tool.",
//     type: "Knowledge Agent",
//     useCase: "Ensure quality standards in deliverables.",
//     detailedDescription: "Reviews and assesses quality against defined standards.",
//     industries: "Manufacturing, Media, Corporate",
//     jobFunctions: "QA Specialists, Editors",
//     category: "Quality Assurance"
//   },
//   "Personal Branding Content Creator": {
//     description: "Personal brand content development system.",
//     type: "Knowledge Agent",
//     useCase: "Create consistent personal branding content.",
//     detailedDescription: "Generates brand-aligned content across various platforms.",
//     industries: "Marketing, Personal Development",
//     jobFunctions: "Content Creators, Influencers, Marketers",
//     category: "Branding"
//   },

//   // ACTION AGENTS (12)
//   "AI Calendar Assistant": {
//     description: "Intelligent calendar management system.",
//     type: "Action Agent",
//     useCase: "Optimize scheduling and calendar management.",
//     detailedDescription: "Manages calendars and schedules with smart conflict resolution.",
//     industries: "Corporate, Education, Freelance",
//     jobFunctions: "Executives, Managers, Assistants",
//     category: "Productivity"
//   },
//   "Task Reporting Assistant": {
//     description: "Task progress tracking system.",
//     type: "Action Agent",
//     useCase: "Monitor and report on task progress.",
//     detailedDescription: "Tracks and reports on task completion and project status.",
//     industries: "Corporate, IT, Operations",
//     jobFunctions: "Team Leads, Operations Managers",
//     category: "Project Management"
//   },
//   "Meeting Assistant": {
//     description: "Meeting management and follow-up system.",
//     type: "Action Agent",
//     useCase: "Manage meeting logistics and follow-up.",
//     detailedDescription: "Handles meeting coordination and action item tracking.",
//     industries: "Corporate, Consulting, Non-Profit",
//     jobFunctions: "Executives, Assistants, Coordinators",
//     category: "Collaboration"
//   },
//   "Team Monitoring Assistant": {
//     description: "Team performance tracking system.",
//     type: "Action Agent",
//     useCase: "Monitor team productivity and engagement.",
//     detailedDescription: "Tracks team metrics and identifies performance patterns.",
//     industries: "IT, Corporate, Startups",
//     jobFunctions: "Team Leads, HR Professionals",
//     category: "Management"
//   },
//   "Study Assistant": {
//     description: "Learning support and organization tool.",
//     type: "Action Agent",
//     useCase: "Optimize study sessions and learning.",
//     detailedDescription: "Creates personalized study plans and tracks progress.",
//     industries: "Education, Corporate Training",
//     jobFunctions: "Students, Trainers, Educators",
//     category: "Education"
//   },
//   "Content Planning Assistant": {
//     description: "Content strategy automation tool.",
//     type: "Action Agent",
//     useCase: "Plan and organize content creation.",
//     detailedDescription: "Manages content calendars and creation workflows.",
//     industries: "Marketing, Media, Design",
//     jobFunctions: "Content Managers, Marketers",
//     category: "Content"
//   },
//   "Ticketing Assistant": {
//     description: "Support ticket management system.",
//     type: "Action Agent",
//     useCase: "Manage and prioritize support tickets.",
//     detailedDescription: "Processes and routes support tickets efficiently.",
//     industries: "IT, Customer Service",
//     jobFunctions: "Support Agents, IT Specialists",
//     category: "Support"
//   },
//   "HR Onboarding Agent": {
//     description: "Employee onboarding automation system.",
//     type: "Action Agent",
//     useCase: "Streamline employee onboarding process.",
//     detailedDescription: "Automates onboarding tasks and documentation.",
//     industries: "Corporate, HR, Startups",
//     jobFunctions: "HR Professionals, Onboarding Specialists",
//     category: "HR"
//   },
//   "Performance Manager": {
//     description: "Employee performance management tool.",
//     type: "Action Agent",
//     useCase: "Track and manage employee performance.",
//     detailedDescription: "Monitors performance metrics and manages reviews.",
//     industries: "Corporate, IT, Operations",
//     jobFunctions: "Team Leads, Operations Managers",
//     category: "Management"
//   },
//   "Sales Team Notification Agent": {
//     description: "Sales activity notification system.",
//     type: "Action Agent",
//     useCase: "Keep sales teams updated on activities.",
//     detailedDescription: "Sends targeted notifications about sales activities.",
//     industries: "Sales, Corporate, Startups",
//     jobFunctions: "Sales Managers, Sales Representatives",
//     category: "Sales"
//   },
//   "Lead Generation Assistant": {
//     description: "Lead identification and qualification tool.",
//     type: "Action Agent",
//     useCase: "Identify and qualify potential leads.",
//     detailedDescription: "Automates lead discovery and qualification process.",
//     industries: "Marketing, Sales",
//     jobFunctions: "Sales Teams, Marketers",
//     category: "Sales"
//   },
//   "Product Management Assistant": {
//     description: "Product development management system.",
//     type: "Action Agent",
//     useCase: "Manage product development workflow.",
//     detailedDescription: "Coordinates product development activities and tracking.",
//     industries: "Corporate, IT, Startups",
//     jobFunctions: "Product Managers, Project Managers",
//     category: "Product"
//   },

//   // AUTOMATION WORKFLOWS (14)
//   "CRM to WhatsApp/Telegram": {
//     description: "CRM messaging integration system.",
//     type: "Automation Workflow",
//     useCase: "Automate messaging between platforms.",
//     detailedDescription: "Integrates CRM data with messaging platforms.",
//     industries: "Marketing, Sales",
//     jobFunctions: "Marketers, Sales Representatives",
//     category: "Integration"
//   },
//   "Reports Automation": {
//     description: "Automated reporting system.",
//     type: "Automation Workflow",
//     useCase: "Automate report generation and distribution.",
//     detailedDescription: "Generates and distributes reports automatically.",
//     industries: "Corporate, IT, Finance",
//     jobFunctions: "Analysts, Operations Managers",
//     category: "Reporting"
//   },
//   "Lead Transfer Workflow": {
//     description: "Lead routing automation system.",
//     type: "Automation Workflow",
//     useCase: "Automate lead distribution process.",
//     detailedDescription: "Routes leads based on defined criteria and rules.",
//     industries: "Sales, CRM Management",
//     jobFunctions: "Sales Teams, CRM Managers",
//     category: "Sales"
//   },
//   "Ad Account Notifications": {
//     description: "Advertising performance monitoring.",
//     type: "Automation Workflow",
//     useCase: "Monitor ad accounts and performance.",
//     detailedDescription: "Tracks ad metrics and sends notifications.",
//     industries: "Marketing, Advertising",
//     jobFunctions: "Ad Managers, Marketers",
//     category: "Advertising"
//   },
//   "Trend-to-Content Planner": {
//     description: "Trend-based content automation.",
//     type: "Automation Workflow",
//     useCase: "Create content plans from trends.",
//     detailedDescription: "Generates content plans based on trending topics.",
//     industries: "Marketing, Media",
//     jobFunctions: "Content Strategists, Marketers",
//     category: "Content"
//   },
//   "Event Tracker Automation": {
//     description: "Event monitoring system.",
//     type: "Automation Workflow",
//     useCase: "Track and manage event metrics.",
//     detailedDescription: "Monitors event performance and engagement.",
//     industries: "Corporate, Marketing, Events",
//     jobFunctions: "Event Managers, Coordinators",
//     category: "Events"
//   },
//   "Automated Email Actions": {
//     description: "Email automation system.",
//     type: "Automation Workflow",
//     useCase: "Automate email responses and sequences.",
//     detailedDescription: "Manages automated email workflows and responses.",
//     industries: "Sales, Marketing, IT",
//     jobFunctions: "Sales Teams, IT Professionals",
//     category: "Communication"
//   },
//   "LinkedIn/Email Outreach": {
//     description: "Multi-channel outreach automation.",
//     type: "Automation Workflow",
//     useCase: "Automate professional networking outreach.",
//     detailedDescription: "Coordinates outreach across LinkedIn and email.",
//     industries: "Sales, Marketing",
//     jobFunctions: "Sales Teams, Outreach Specialists",
//     category: "Outreach"
//   },
//   "Legal Document Automation": {
//     description: "Legal document processing system.",
//     type: "Automation Workflow",
//     useCase: "Automate legal document workflows.",
//     detailedDescription: "Processes and manages legal documentation.",
//     industries: "Legal, Corporate, HR",
//     jobFunctions: "Legal Teams, HR Professionals",
//     category: "Legal"
//   },
//   "Task Reminders Workflow": {
//     description: "Task reminder automation system.",
//     type: "Automation Workflow",
//     useCase: "Automate task reminder sequences.",
//     detailedDescription: "Manages automated task reminders and follow-ups.",
//     industries: "Corporate, IT, Operations",
//     jobFunctions: "Team Members, Project Managers",
//     category: "Productivity"
//   },
//   "Idea and Brainstorming Automation": {
//     description: "Ideation process automation.",
//     type: "Automation Workflow",
//     useCase: "Automate idea collection and management.",
//     detailedDescription: "Manages ideation and brainstorming processes.",
//     industries: "Creative, Corporate, Startups",
//     jobFunctions: "Strategists, Creatives, Marketers",
//     category: "Innovation"
//   },
//   "Auto-Posting Workflow": {
//     description: "Social media posting automation.",
//     type: "Automation Workflow",
//     useCase: "Automate social media content posting.",
//     detailedDescription: "Manages automated social media posting schedules.",
//     industries: "Marketing, Social Media",
//     jobFunctions: "Social Media Managers, Content Creators",
//     category: "Social Media"
//   },
//   "KPI Monitoring Automation": {
//     description: "KPI tracking automation system.",
//     type: "Automation Workflow",
//     useCase: "Automate KPI monitoring and alerts.",
//     detailedDescription: "Tracks KPIs and generates automated alerts.",
//     industries: "Corporate, Operations, IT",
//     jobFunctions: "Operations Managers, Analysts",
//     category: "Analytics"
//   },
//   "Event-Based Task Creation": {
//     description: "Event-triggered task automation.",
//     type: "Automation Workflow",
//     useCase: "Create tasks based on system events.",
//     detailedDescription: "Generates tasks automatically from trigger events.",
//     industries: "Corporate, IT, Project Management",
//     jobFunctions: "Project Managers, IT Teams",
//     category: "Workflow"
//   },
//   "Customer Success Monitoring": {
//     description: "Automated customer lifecycle milestone management.",
//     type: "Automation Workflow",
//     useCase: "Track and respond to key customer lifecycle events.",
//     detailedDescription: "Monitors customer journey milestones and triggers appropriate actions based on usage patterns, engagement levels, and success metrics. Automatically identifies critical touchpoints such as first value moment, renewal dates, usage milestones, and potential churn indicators.",
//     industries: "SaaS, Technology, Subscription Services, Professional Services",
//     jobFunctions: "Customer Success Managers, Account Managers, Sales Teams",
//     category: "Customer Success"
//   }
// };

const AIAgentsShowcase = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedIndustry, setSelectedIndustry] = useState('');
  const [selectedJobFunction, setSelectedJobFunction] = useState('');
  const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null);
  const [_selectedType, _setSelectedType] = useState('all');

  // Get unique values for filters
  const allItems = Object.entries(AGENTS_DATA).map(([title, details]) => ({
    title, // Add the key as the title
    ...details
  }));

  const industries = [...new Set(allItems.flatMap(item => item.industries.split(', ')))];
  const jobFunctions = [...new Set(allItems.flatMap(item => item.jobFunctions.split(', ')))];

  // Filter agents based on all criteria
  const filteredAgents = allItems.filter(agent => {
    const matchesSearch = searchTerm === '' ||
      agent.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      agent.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      agent.industries.toLowerCase().includes(searchTerm.toLowerCase()) ||
      agent.jobFunctions.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory = selectedCategory === 'All' || agent.type === selectedCategory;
    const matchesIndustry = selectedIndustry === '' || agent.industries.includes(selectedIndustry);
    const matchesJobFunction = selectedJobFunction === '' || agent.jobFunctions.includes(selectedJobFunction);

    return matchesSearch && matchesCategory && matchesIndustry && matchesJobFunction;
  });

  // Group agents by type
  const groupedAgents = {
    knowledge: filteredAgents.filter(agent => agent.type === 'Knowledge Agent'),
    action: filteredAgents.filter(agent => agent.type === 'Action Agent'),
    automation: filteredAgents.filter(agent => agent.type === 'Automation Workflow')
  };

  interface AgentTypeBlockProps {
    title: string;
    description: string;
    examples: string[];
    graphic: React.ComponentType;
    color: string;
  }

  // Agent Type Block Component
  const AgentTypeBlock: React.FC<AgentTypeBlockProps> = ({ title, description, examples, graphic: Graphic, color }) => (
    <motion.div variants={fadeInUp} className={`p-6 rounded-lg border-2 ${color} bg-white`}>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <Graphic />
      <p className="text-gray-600 my-4">{description}</p>
      <div className="space-y-2">
        {examples.map((example, index) => (
          <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
            <ArrowRightCircle size={16} />
            <span>{example}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );

  interface Agent {
    title: string; // Add the title property
    description: string;
    type: string;
    useCase: string;
    detailedDescription: string;
    industries: string;
    jobFunctions: string;
    category: string;
  }


  interface AgentCardProps {
    agent: Agent;
    onSelectAgent: (agent: Agent) => void; // Callback to handle agent selection
  }

  const AgentCard: React.FC<AgentCardProps> = ({ agent, onSelectAgent }) => {
    const getTypeStyle = () => {
      switch (agent.type) {
        case 'Knowledge Agent':
          return 'bg-blue-50 hover:bg-blue-100 border-blue-200';
        case 'Action Agent':
          return 'bg-green-50 hover:bg-green-100 border-green-200';
        case 'Automation Workflow':
          return 'bg-red-50 hover:bg-red-100 border-red-200';
        default:
          return 'bg-gray-50 hover:bg-gray-100 border-gray-200';
      }
    };

    return (
      <div
        className={`p-6 rounded-lg border cursor-pointer transition-all ${getTypeStyle()}`}
        onClick={() => onSelectAgent(agent)}
      >
        <h3 className="text-lg font-semibold mb-2">{agent.title}</h3>
        <p className="text-gray-600 mb-4">{agent.description}</p>
        <div className="space-y-2">
          <div className="flex flex-wrap gap-2">
            {agent.industries.split(', ').map((industry, index) => (
              <span
                key={index}
                className="text-xs px-2 py-1 bg-white rounded-full border"
              >
                {industry}
              </span>
            ))}
          </div>
          <p className="text-sm text-gray-500">{agent.category}</p>
        </div>
      </div>
    );
  };

  interface AgentDetailModalProps {
    agent: Agent; // Assuming `Agent` interface exists
    onClose: () => void;
  }

  const AgentDetailModal: React.FC<AgentDetailModalProps> = ({ agent, onClose }) => {
    if (!agent) return null;

    const getModalColor = () => {
      switch (agent.type) {
        case "Knowledge Agent":
          return "bg-blue-50 border-blue-200";
        case "Action Agent":
          return "bg-green-50 border-green-200";
        case "Automation Workflow":
          return "bg-red-50 border-red-200";
        default:
          return "bg-gray-50 border-gray-200";
      }
    };

    const handleCoachRedirect = () => {
      window.location.href = "https://icancoachyou.online/en/coaches/ahmed-tawfeeq";
    };

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
        <div
          className={`relative w-full sm:max-w-full md:max-w-3xl mx-auto rounded-lg shadow-xl ${getModalColor()} border-2 p-4 sm:p-6`}
          style={{ maxHeight: "90vh" }} // Ensure modal fits screen height
        >
          {/* Scrollable Content */}
          <div className="overflow-y-auto max-h-screen">
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
            >
              <X size={24} />
            </button>

            {/* Modal Header */}
            <div className="flex flex-wrap gap-4 items-center mb-4">
              <h2 className="text-2xl md:text-3xl font-bold">{agent.title}</h2>
              <span className="px-3 py-1 bg-white rounded-full text-sm border">
                {agent.category}
              </span>
            </div>

            {/* Modal Body */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-lg mb-2">Overview</h3>
                <p className="text-gray-700 mb-4">{agent.description}</p>

                <h3 className="font-semibold text-lg mb-2">Use Cases</h3>
                <p className="text-gray-700 mb-4">{agent.useCase}</p>
              </div>

              <div>
                <div className="space-y-2">
                  <div>
                    <h4 className="font-semibold mb-1">Industries</h4>
                    <div className="flex flex-wrap gap-2">
                      {agent.industries.split(", ").map((industry) => (
                        <span
                          key={industry}
                          className="bg-white px-2 py-1 rounded-full text-xs border"
                        >
                          {industry}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-1">Job Functions</h4>
                    <div className="flex flex-wrap gap-2">
                      {agent.jobFunctions.split(", ").map((job) => (
                        <span
                          key={job}
                          className="bg-white px-2 py-1 rounded-full text-xs border"
                        >
                          {job}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Implementation Guide */}
            <div className="mt-6">
              <h3 className="font-semibold text-lg mb-2">How it works?</h3>
              <p className="text-gray-700">{agent.detailedDescription}</p>
            </div>

            {/* Footer Buttons */}
            <div className="mt-6 flex justify-end gap-2">
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-lg border text-sm hover:bg-gray-100"
              >
                Close
              </button>
              <button
                onClick={handleCoachRedirect}
                className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm hover:bg-blue-700"
              >
                Coach me for this!
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Hero Section */}
      <motion.div
        className="lg:w-1/2 space-y-6 mx-auto"
        initial={{ opacity: 50, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4 py-12 text-center">
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">
            AI Agents Farm! 🤖
          </span>
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Discover Your Perfect AI Assistant!
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our curated collection of AI agents and automation workflows, brought to you from +20 Ai & Automation Coaching Journies with industries experts - Designed to transform your productivity.
          </p>
        </div>
      </motion.div>

      {/* Agents Showcase */}
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold">
            3-Pillers for Our AI Agents & Automation Coaching Program!
          </span>
        </div>

        {/* Educational Blocks */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
          className="container mx-auto grid md:grid-cols-3 gap-6 max-w-6xl px-4 mb-12"
        >
          <AgentTypeBlock
            title="Knowledge Agents"
            description="AI tools that gather, analyze, and synthesize information."
            examples={['Research and analysis', 'Content creation', 'Strategic planning']}
            graphic={KnowledgeGraphic}
            color="border-blue-600"
          />
          <AgentTypeBlock
            title="Action Agents"
            description="Assistants that perform specific tasks based on triggers."
            examples={['Calendar management', 'Task monitoring', 'Performance tracking']}
            graphic={ActionGraphic}
            color="border-green-600"
          />
          <AgentTypeBlock
            title="Automation Workflows"
            description="End-to-end process automation solutions."
            examples={['Document processing', 'Multi-channel integration', 'Event-based automation']}
            graphic={AutomationGraphic}
            color="border-red-600"
          />
        </motion.div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-12">
          <div className="grid md:grid-cols-4 gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search agents..."
                className="w-full p-3 pl-10 border rounded-lg"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            <select
              className="p-3 border rounded-lg"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="All">All Categories</option>
              <option value="Knowledge Agent">Knowledge Agents</option>
              <option value="Action Agent">Action Agents</option>
              <option value="Automation Workflow">Automation Workflows</option>
            </select>
            <select
              className="p-3 border rounded-lg"
              value={selectedIndustry}
              onChange={(e) => setSelectedIndustry(e.target.value)}
            >
              <option value="">All Industries</option>
              {industries.map((industry) => (
                <option key={industry} value={industry}>
                  {industry}
                </option>
              ))}
            </select>
            <select
              className="p-3 border rounded-lg"
              value={selectedJobFunction}
              onChange={(e) => setSelectedJobFunction(e.target.value)}
            >
              <option value="">All Job Functions</option>
              {jobFunctions.map((job) => (
                <option key={job} value={job}>
                  {job}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Agent Sections */}
        {Object.entries(groupedAgents).map(([type, agents]) => (
          <div key={type} className="mb-12">
            <h2 className="text-2xl font-bold mb-6">
              {type === 'knowledge' && 'Knowledge Agents'}
              {type === 'action' && 'Action Agents'}
              {type === 'automation' && 'Automation Workflows'}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {agents.map((agent) => (
                <AgentCard
                  key={agent.title}
                  agent={agent}
                  onSelectAgent={(selectedAgent) => setSelectedAgent(selectedAgent)}
                />
              ))}
            </div>
          </div>
        ))}

        {/* Agent Detail Modal */}
        {selectedAgent && (
          <AgentDetailModal agent={selectedAgent} onClose={() => setSelectedAgent(null)} />
        )}

        {/* Back to Top Button */}
        <button
          className="fixed bottom-24 right-6 bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <ChevronUp size={24} />
        </button>
      </div>
      {/* Footer */}
      <footer className="bg-gray-900 text-white text-left py-8">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">
              Ahmed Tawfeeq - AI & Automation Specialist
            </h3>
            <p className="text-sm text-gray-400">
              © 2025 All Rights Reserved.
            </p>
          </div>
          <div className="flex gap-6">
            <a
              href="https://www.facebook.com/ahmed.tawfeeq01"
              className="hover:text-blue-400 transition"
            >
              Facebook
            </a>
            <a
              href="https://www.linkedin.com/in/ahmed-tawfeeq/"
              className="hover:text-blue-400 transition"
            >
              LinkedIn
            </a>
            <a
              href="https://wa.me/+201288493425"
              className="hover:text-green-400 transition"
            >
              WhatsApp
            </a>
            <a
              href="mailto:a.tawfeeq101@gmail.com"
              className="hover:text-yellow-400 transition"
            >
              Email
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default AIAgentsShowcase;