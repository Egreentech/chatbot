import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.tsx';
import { About } from './pages/About.tsx';
import { Contact } from './pages/Contact.tsx';
import { Services } from './pages/Services.tsx';
import { DigitalAvatars } from './pages/services/DigitalAvatars.tsx';
import { AIConsulting } from './pages/services/AIConsulting.tsx';
import { AIAssistants } from './pages/services/AIAssistants.tsx';
import { VoiceSolutions } from './pages/services/VoiceSolutions.tsx';
import { LLMFineTuning } from './pages/services/LLMFineTuning.tsx';
import { PromptEngineering } from './pages/services/PromptEngineering.tsx';
import { AIIntegration } from './pages/services/AIIntegration.tsx';
import { Blog } from './pages/Blog.tsx';
import { BlogPost } from './pages/BlogPost.tsx';
import { PrivacyPolicy } from './pages/PrivacyPolicy.tsx';
import { Terms } from './pages/Terms.tsx';
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/services/consulting",
    element: <AIConsulting />,
  },
  {
    path: "/services/digital-avatars",
    element: <DigitalAvatars />,
  },
  {
    path: "/services/ai-assistants",
    element: <AIAssistants />,
  },
  {
    path: "/services/voice-solutions",
    element: <VoiceSolutions />,
  },
  {
    path: "/services/llm-tuning",
    element: <LLMFineTuning />,
  },
  {
    path: "/services/prompt-engineering",
    element: <PromptEngineering />,
  },
  {
    path: "/services/ai-integration",
    element: <AIIntegration />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/blog/:blogTitle",
    element: <BlogPost />,
  },
  {
    path: "/privacy-policy",
    element: <PrivacyPolicy />,
  },
  {
    path: "/terms",
    element: <Terms />,
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </StrictMode>
);