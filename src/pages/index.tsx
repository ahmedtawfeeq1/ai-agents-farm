import { useState } from 'react';
import { Search, ChevronUp, X, ArrowRight } from 'lucide-react'; // Remove unused icons


// SVG graphics for agent type illustrations
const KnowledgeGraphic = () => (
  <svg viewBox="0 0 200 120" className="w-full h-32">
    <rect x="20" y="20" width="160" height="80" rx="4" fill="#EBF5FF" stroke="#3B82F6" strokeWidth="2"/>
    <circle cx="60" cy="60" r="20" fill="#3B82F6" opacity="0.2"/>
    <path d="M40 80 L160 80" stroke="#3B82F6" strokeWidth="2"/>
    <circle cx="140" cy="40" r="15" fill="#3B82F6" opacity="0.3"/>
  </svg>
);

const ActionGraphic = () => (
  <svg viewBox="0 0 200 120" className="w-full h-32">
    <rect x="20" y="20" width="160" height="80" rx="4" fill="#ECFDF5" stroke="#059669" strokeWidth="2"/>
    <path d="M40 60 L160 60" stroke="#059669" strokeWidth="2" strokeDasharray="5,5"/>
    <circle cx="100" cy="60" r="25" fill="#059669" opacity="0.2"/>
    <path d="M70 40 L130 80" stroke="#059669" strokeWidth="2"/>
  </svg>
);

const AutomationGraphic = () => (
  <svg viewBox="0 0 200 120" className="w-full h-32">
    <rect x="20" y="20" width="160" height="80" rx="4" fill="#FEF2F2" stroke="#DC2626" strokeWidth="2"/>
    <path d="M40 40 C70 40, 130 80, 160 80" stroke="#DC2626" strokeWidth="2" fill="none"/>
    <circle cx="100" cy="60" r="20" fill="#DC2626" opacity="0.2"/>
    <path d="M60 80 L140 40" stroke="#DC2626" strokeWidth="2" strokeDasharray="4,4"/>
  </svg>
);

// Complete agents data constant
const AGENTS_DATA = {
  // KNOWLEDGE AGENTS (12)
  "Research Assistant": {
    description: "A comprehensive research tool for information aggregation and synthesis.",
    type: "Knowledge Agent",
    useCase: "Efficiently gather and analyze information from multiple sources.",
    detailedDescription: "Advanced AI system that scans academic databases, publications, and archives to extract insights and provide comprehensive research summaries.",
    industries: "Research, Consulting, Education",
    jobFunctions: "Analysts, Researchers, Consultants",
    category: "Research & Analysis"
  },
  "Proposal/RFP Creator": {
    description: "Intelligent proposal and RFP response generator.",
    type: "Knowledge Agent",
    useCase: "Create professional proposals and bid responses efficiently.",
    detailedDescription: "Analyzes requirements and generates tailored proposals using company data and industry best practices.",
    industries: "Consulting, Corporate, Government",
    jobFunctions: "Business Development, Proposal Writers",
    category: "Document Creation"
  },
  "Strategy/Business Plan Builder": {
    description: "Strategic business planning and documentation system.",
    type: "Knowledge Agent",
    useCase: "Develop comprehensive business plans and strategies.",
    detailedDescription: "Creates detailed business plans incorporating market analysis, financial projections, and strategic frameworks.",
    industries: "Corporate, Startups, Finance",
    jobFunctions: "Strategists, Business Planners, Executives",
    category: "Strategic Planning"
  },
  "Strategy Report Generator": {
    description: "Strategic analysis and reporting system.",
    type: "Knowledge Agent",
    useCase: "Generate detailed strategy and market analysis reports.",
    detailedDescription: "Produces comprehensive strategy documents with market insights and recommendations.",
    industries: "Marketing, Corporate, Consulting",
    jobFunctions: "Marketing Analysts, Strategists",
    category: "Strategic Planning"
  },
  "Performance Report Generator": {
    description: "Performance analysis and reporting tool.",
    type: "Knowledge Agent",
    useCase: "Create detailed performance analysis reports.",
    detailedDescription: "Analyzes performance data to generate insights and recommendations.",
    industries: "Corporate, IT, Finance",
    jobFunctions: "Project Managers, Operations, Analysts",
    category: "Analytics"
  },
  "Minutes of Meeting Creator": {
    description: "Automated meeting minutes generator.",
    type: "Knowledge Agent",
    useCase: "Generate structured meeting minutes and summaries.",
    detailedDescription: "Creates organized meeting minutes with action items and key decisions.",
    industries: "Corporate, Non-Profit, Education",
    jobFunctions: "Project Managers, Assistants, Coordinators",
    category: "Documentation"
  },
  "Visual Content Generator": {
    description: "Professional visual content creation tool.",
    type: "Knowledge Agent",
    useCase: "Create engaging visual content and presentations.",
    detailedDescription: "Generates visual content with consistent branding and design principles.",
    industries: "Marketing, Media, Design",
    jobFunctions: "Graphic Designers, Content Creators",
    category: "Content Creation"
  },
  "Explainer Content GPT": {
    description: "Educational content creation assistant.",
    type: "Knowledge Agent",
    useCase: "Create clear explanatory content and tutorials.",
    detailedDescription: "Transforms complex topics into accessible, engaging content.",
    industries: "Education, Marketing, Media",
    jobFunctions: "Educators, Marketers, Content Developers",
    category: "Education"
  },
  "Training Knowledge Builder": {
    description: "Training material development system.",
    type: "Knowledge Agent",
    useCase: "Create comprehensive training materials.",
    detailedDescription: "Develops structured training content and assessment materials.",
    industries: "Education, Corporate Training",
    jobFunctions: "Trainers, HR Professionals",
    category: "Training"
  },
  "Task Allocation Planner": {
    description: "Intelligent task distribution system.",
    type: "Knowledge Agent",
    useCase: "Optimize task allocation and workload management.",
    detailedDescription: "Plans optimal task distribution based on team capacity and skills.",
    industries: "Corporate, Project Management",
    jobFunctions: "Project Managers, Team Leads",
    category: "Project Management"
  },
  "Quality Control Agent": {
    description: "Content and product quality assessment tool.",
    type: "Knowledge Agent",
    useCase: "Ensure quality standards in deliverables.",
    detailedDescription: "Reviews and assesses quality against defined standards.",
    industries: "Manufacturing, Media, Corporate",
    jobFunctions: "QA Specialists, Editors",
    category: "Quality Assurance"
  },
  "Personal Branding Content Creator": {
    description: "Personal brand content development system.",
    type: "Knowledge Agent",
    useCase: "Create consistent personal branding content.",
    detailedDescription: "Generates brand-aligned content across various platforms.",
    industries: "Marketing, Personal Development",
    jobFunctions: "Content Creators, Influencers, Marketers",
    category: "Branding"
  },

  // ACTION AGENTS (12)
  "AI Calendar Assistant": {
    description: "Intelligent calendar management system.",
    type: "Action Agent",
    useCase: "Optimize scheduling and calendar management.",
    detailedDescription: "Manages calendars and schedules with smart conflict resolution.",
    industries: "Corporate, Education, Freelance",
    jobFunctions: "Executives, Managers, Assistants",
    category: "Productivity"
  },
  "Task Reporting Assistant": {
    description: "Task progress tracking system.",
    type: "Action Agent",
    useCase: "Monitor and report on task progress.",
    detailedDescription: "Tracks and reports on task completion and project status.",
    industries: "Corporate, IT, Operations",
    jobFunctions: "Team Leads, Operations Managers",
    category: "Project Management"
  },
  "Meeting Assistant": {
    description: "Meeting management and follow-up system.",
    type: "Action Agent",
    useCase: "Manage meeting logistics and follow-up.",
    detailedDescription: "Handles meeting coordination and action item tracking.",
    industries: "Corporate, Consulting, Non-Profit",
    jobFunctions: "Executives, Assistants, Coordinators",
    category: "Collaboration"
  },
  "Team Monitoring Assistant": {
    description: "Team performance tracking system.",
    type: "Action Agent",
    useCase: "Monitor team productivity and engagement.",
    detailedDescription: "Tracks team metrics and identifies performance patterns.",
    industries: "IT, Corporate, Startups",
    jobFunctions: "Team Leads, HR Professionals",
    category: "Management"
  },
  "Study Assistant": {
    description: "Learning support and organization tool.",
    type: "Action Agent",
    useCase: "Optimize study sessions and learning.",
    detailedDescription: "Creates personalized study plans and tracks progress.",
    industries: "Education, Corporate Training",
    jobFunctions: "Students, Trainers, Educators",
    category: "Education"
  },
  "Content Planning Assistant": {
    description: "Content strategy automation tool.",
    type: "Action Agent",
    useCase: "Plan and organize content creation.",
    detailedDescription: "Manages content calendars and creation workflows.",
    industries: "Marketing, Media, Design",
    jobFunctions: "Content Managers, Marketers",
    category: "Content"
  },
  "Ticketing Assistant": {
    description: "Support ticket management system.",
    type: "Action Agent",
    useCase: "Manage and prioritize support tickets.",
    detailedDescription: "Processes and routes support tickets efficiently.",
    industries: "IT, Customer Service",
    jobFunctions: "Support Agents, IT Specialists",
    category: "Support"
  },
  "HR Onboarding Agent": {
    description: "Employee onboarding automation system.",
    type: "Action Agent",
    useCase: "Streamline employee onboarding process.",
    detailedDescription: "Automates onboarding tasks and documentation.",
    industries: "Corporate, HR, Startups",
    jobFunctions: "HR Professionals, Onboarding Specialists",
    category: "HR"
  },
  "Performance Manager": {
    description: "Employee performance management tool.",
    type: "Action Agent",
    useCase: "Track and manage employee performance.",
    detailedDescription: "Monitors performance metrics and manages reviews.",
    industries: "Corporate, IT, Operations",
    jobFunctions: "Team Leads, Operations Managers",
    category: "Management"
  },
  "Sales Team Notification Agent": {
    description: "Sales activity notification system.",
    type: "Action Agent",
    useCase: "Keep sales teams updated on activities.",
    detailedDescription: "Sends targeted notifications about sales activities.",
    industries: "Sales, Corporate, Startups",
    jobFunctions: "Sales Managers, Sales Representatives",
    category: "Sales"
  },
  "Lead Generation Assistant": {
    description: "Lead identification and qualification tool.",
    type: "Action Agent",
    useCase: "Identify and qualify potential leads.",
    detailedDescription: "Automates lead discovery and qualification process.",
    industries: "Marketing, Sales",
    jobFunctions: "Sales Teams, Marketers",
    category: "Sales"
  },
  "Product Management Assistant": {
    description: "Product development management system.",
    type: "Action Agent",
    useCase: "Manage product development workflow.",
    detailedDescription: "Coordinates product development activities and tracking.",
    industries: "Corporate, IT, Startups",
    jobFunctions: "Product Managers, Project Managers",
    category: "Product"
  },

  // AUTOMATION WORKFLOWS (14)
  "CRM to WhatsApp/Telegram": {
    description: "CRM messaging integration system.",
    type: "Automation Workflow",
    useCase: "Automate messaging between platforms.",
    detailedDescription: "Integrates CRM data with messaging platforms.",
    industries: "Marketing, Sales",
    jobFunctions: "Marketers, Sales Representatives",
    category: "Integration"
  },
  "Reports Automation": {
    description: "Automated reporting system.",
    type: "Automation Workflow",
    useCase: "Automate report generation and distribution.",
    detailedDescription: "Generates and distributes reports automatically.",
    industries: "Corporate, IT, Finance",
    jobFunctions: "Analysts, Operations Managers",
    category: "Reporting"
  },
  "Lead Transfer Workflow": {
    description: "Lead routing automation system.",
    type: "Automation Workflow",
    useCase: "Automate lead distribution process.",
    detailedDescription: "Routes leads based on defined criteria and rules.",
    industries: "Sales, CRM Management",
    jobFunctions: "Sales Teams, CRM Managers",
    category: "Sales"
  },
  "Ad Account Notifications": {
    description: "Advertising performance monitoring.",
    type: "Automation Workflow",
    useCase: "Monitor ad accounts and performance.",
    detailedDescription: "Tracks ad metrics and sends notifications.",
    industries: "Marketing, Advertising",
    jobFunctions: "Ad Managers, Marketers",
    category: "Advertising"
  },
  "Trend-to-Content Planner": {
    description: "Trend-based content automation.",
    type: "Automation Workflow",
    useCase: "Create content plans from trends.",
    detailedDescription: "Generates content plans based on trending topics.",
    industries: "Marketing, Media",
    jobFunctions: "Content Strategists, Marketers",
    category: "Content"
  },
  "Event Tracker Automation": {
    description: "Event monitoring system.",
    type: "Automation Workflow",
    useCase: "Track and manage event metrics.",
    detailedDescription: "Monitors event performance and engagement.",
    industries: "Corporate, Marketing, Events",
    jobFunctions: "Event Managers, Coordinators",
    category: "Events"
  },
  "Automated Email Actions": {
    description: "Email automation system.",
    type: "Automation Workflow",
    useCase: "Automate email responses and sequences.",
    detailedDescription: "Manages automated email workflows and responses.",
    industries: "Sales, Marketing, IT",
    jobFunctions: "Sales Teams, IT Professionals",
    category: "Communication"
  },
  "LinkedIn/Email Outreach": {
    description: "Multi-channel outreach automation.",
    type: "Automation Workflow",
    useCase: "Automate professional networking outreach.",
    detailedDescription: "Coordinates outreach across LinkedIn and email.",
    industries: "Sales, Marketing",
    jobFunctions: "Sales Teams, Outreach Specialists",
    category: "Outreach"
  },
  "Legal Document Automation": {
    description: "Legal document processing system.",
    type: "Automation Workflow",
    useCase: "Automate legal document workflows.",
    detailedDescription: "Processes and manages legal documentation.",
    industries: "Legal, Corporate, HR",
    jobFunctions: "Legal Teams, HR Professionals",
    category: "Legal"
  },
  "Task Reminders Workflow": {
    description: "Task reminder automation system.",
    type: "Automation Workflow",
    useCase: "Automate task reminder sequences.",
    detailedDescription: "Manages automated task reminders and follow-ups.",
    industries: "Corporate, IT, Operations",
    jobFunctions: "Team Members, Project Managers",
    category: "Productivity"
  },
  "Idea and Brainstorming Automation": {
    description: "Ideation process automation.",
    type: "Automation Workflow",
    useCase: "Automate idea collection and management.",
    detailedDescription: "Manages ideation and brainstorming processes.",
    industries: "Creative, Corporate, Startups",
    jobFunctions: "Strategists, Creatives, Marketers",
    category: "Innovation"
  },
  "Auto-Posting Workflow": {
    description: "Social media posting automation.",
    type: "Automation Workflow",
    useCase: "Automate social media content posting.",
    detailedDescription: "Manages automated social media posting schedules.",
    industries: "Marketing, Social Media",
    jobFunctions: "Social Media Managers, Content Creators",
    category: "Social Media"
  },
  "KPI Monitoring Automation": {
    description: "KPI tracking automation system.",
    type: "Automation Workflow",
    useCase: "Automate KPI monitoring and alerts.",
    detailedDescription: "Tracks KPIs and generates automated alerts.",
    industries: "Corporate, Operations, IT",
    jobFunctions: "Operations Managers, Analysts",
    category: "Analytics"
  },
  "Event-Based Task Creation": {
    description: "Event-triggered task automation.",
    type: "Automation Workflow",
    useCase: "Create tasks based on system events.",
    detailedDescription: "Generates tasks automatically from trigger events.",
    industries: "Corporate, IT, Project Management",
    jobFunctions: "Project Managers, IT Teams",
    category: "Workflow"
  }
};

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

const AgentTypeBlock: React.FC<AgentTypeBlockProps> = ({ title, description, examples, graphic: Graphic, color }) => (
  <div className={`p-6 rounded-lg border-2 ${color} bg-white`}>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <Graphic />
    <p className="text-gray-600 my-4">{description}</p>
    <div className="space-y-2">
      {examples.map((example, index) => (
        <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
          <ArrowRight size={16} />
          <span>{example}</span>
        </div>
      ))}
    </div>
  </div>
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
      switch(agent.type) {
        case 'Knowledge Agent': return 'bg-blue-50 border-blue-200';
        case 'Action Agent': return 'bg-green-50 border-green-200';
        case 'Automation Workflow': return 'bg-red-50 border-red-200';
        default: return 'bg-gray-50 border-gray-200';
      }
    };

    const handleCoachRedirect = () => {
      window.location.href = 'https://icancoachyou.online/en/coaches/ahmed-tawfeeq';
    };

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
        <div className={`relative w-full max-w-3xl mx-auto rounded-lg shadow-xl ${getModalColor()} border-2 p-8`}>
          <button 
            onClick={onClose} 
            className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
          >
            <X size={24} />
          </button>
          
          <div className="flex items-center gap-4 mb-6">
            <h2 className="text-3xl font-bold">{agent.title}</h2>
            <span className="px-3 py-1 bg-white rounded-full text-sm border">
              {agent.category}
            </span>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-xl mb-4">Overview</h3>
              <p className="text-gray-700 mb-6">{agent.description}</p>
              
              <h3 className="font-semibold text-xl mb-4">Use Cases</h3>
              <p className="text-gray-700 mb-6">{agent.useCase}</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-xl mb-4">Implementation</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Industries</h4>
                  <div className="flex flex-wrap gap-2">
                    {agent.industries.split(', ').map(industry => (
                      <span key={industry} className="bg-white px-3 py-1 rounded-full text-sm border">
                        {industry}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Job Functions</h4>
                  <div className="flex flex-wrap gap-2">
                    {agent.jobFunctions.split(', ').map(job => (
                      <span key={job} className="bg-white px-3 py-1 rounded-full text-sm border">
                        {job}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <h3 className="font-semibold text-xl mb-4">Implementation Guide</h3>
            <p className="text-gray-700 mb-6">{agent.detailedDescription}</p>
          </div>
          
          <div className="mt-8 flex justify-end gap-4">
            <button 
              onClick={onClose}
              className="px-6 py-3 rounded-lg border hover:bg-gray-50"
            >
              Close
            </button>
            <button 
              onClick={handleCoachRedirect}
              className="px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
            >
              Coach me for this!
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Educational Blocks */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <AgentTypeBlock
          title="Knowledge Agents"
          description="AI-powered tools that gather, analyze, and synthesize information to create valuable insights and content."
          examples={[
            "Research and analysis",
            "Content creation",
            "Strategic planning"
          ]}
          graphic={KnowledgeGraphic}
          color="border-blue-600"
        />
        <AgentTypeBlock
          title="Action Agents"
          description="Automated assistants that perform specific tasks and execute actions based on defined triggers and rules."
          examples={[
            "Calendar management",
            "Task monitoring",
            "Performance tracking"
          ]}
          graphic={ActionGraphic}
          color="border-green-600"
        />
        <AgentTypeBlock
          title="Automation Workflows"
          description="End-to-end process automation solutions that connect multiple systems and streamline complex workflows."
          examples={[
            "Document processing",
            "Multi-channel integration",
            "Event-based automation"
          ]}
          graphic={AutomationGraphic}
          color="border-red-600"
        />
      </div>

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
            {industries.map(industry => (
              <option key={industry} value={industry}>{industry}</option>
            ))}
          </select>
          
          <select
            className="p-3 border rounded-lg"
            value={selectedJobFunction}
            onChange={(e) => setSelectedJobFunction(e.target.value)}
          >
            <option value="">All Job Functions</option>
            {jobFunctions.map(job => (
              <option key={job} value={job}>{job}</option>
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
            {agents.map(agent => (
              <AgentCard
              key={agent.title}
              agent={agent}
              onSelectAgent={(selectedAgent) => setSelectedAgent(selectedAgent)} // Or your callback logic
            />
            ))}
          </div>
        </div>
      ))}

      {/* Agent Detail Modal */}
      {selectedAgent && (
        <AgentDetailModal 
          agent={selectedAgent} 
          onClose={() => setSelectedAgent(null)} 
        />
      )}

      {/* Back to Top Button */}
      <button 
        className="fixed bottom-24 right-6 bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <ChevronUp size={24} />
      </button>
    </div>
  );
};

export default AIAgentsShowcase;