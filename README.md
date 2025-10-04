# 👑 ViragoVOX
**The Wikipedia for Women's Impact and Accomplishments**

[![Next.js](https://img.shields.io/badge/Next.js-15.3.3-black?style=flat-square&logo=next.js)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-blue?style=flat-square&logo=react)](https://reactjs.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1-06B6D4?style=flat-square&logo=tailwindcss)](https://tailwindcss.com)
[![Supabase](https://img.shields.io/badge/Supabase-Database-green?style=flat-square&logo=supabase)](https://supabase.com)

ViragoVOX is a comprehensive digital archive celebrating women's contributions throughout history. From pioneering scientists to revolutionary artists, political leaders to tech innovators - discover, explore, and contribute to the stories of extraordinary women who shaped our world.

## 🌟 Features

- **📖 Comprehensive Profiles** - Detailed biographies, timelines, and achievements
- **🎨 Interactive Gallery** - Visual exploration of women across eras and regions  
- **🔍 Smart Search** - Filter by category, era, region, and impact areas
- **📱 Responsive Design** - Beautiful experience across all devices
- **🤝 Community Driven** - Submit and contribute new profiles
- **🧠 AI Integration** - Enhanced content generation and recommendations

## 🚀 Tech Stack

- **Frontend:** Next.js 15 + React 19 + Tailwind CSS
- **UI Components:** Radix UI + Shadcn/ui + React Icons  
- **Database:** Supabase (PostgreSQL)
- **Authentication:** NextAuth.js
- **Deployment:** Vercel
- **AI:** OpenAI GPT integration

## 🛠️ Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Supabase account

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/estheticallybawo/virago-vox.git
   cd virago-vox
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Add your Supabase credentials to `.env.local`:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_key
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open [http://localhost:3000](http://localhost:3000)**

## 📊 Database Schema

The platform uses a relational database structure:

- **`profiles`** - Core women's biographical data
- **`categories`** - Impact areas (Science, Arts, Politics, etc.)
- **`timeline_events`** - Key life events and achievements
- **`quotes`** - Notable quotes and speeches
- **`galleries`** - Images and visual content
- **`contributions`** - User-submitted content

## 🎯 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── gallery/           # Women's profiles gallery
│   ├── profile/[slug]/    # Individual profile pages
│   ├── waitlist/          # Community signup
│   └── api/               # Backend API routes
├── components/
│   └── ui/                # Reusable UI components
└── lib/
    ├── supabase.js        # Database client
    └── utils.js           # Utility functions
```

## 🎨 Design System

- **Colors:** Purple/teal gradient branding (`from-purple-600 to-teal-500`)
- **Typography:** Mulish font family
- **Components:** Custom `!rounded-button` styling with `cursor-pointer whitespace-nowrap`
- **Icons:** React Icons + Lucide React

## 🚧 Development Roadmap

### Phase 1: Foundation (Days 1-25)
- [x] Database setup with Supabase
- [x] Core schema design
- [x] Basic CRUD operations
- [x] Authentication system

### Phase 2: Core Features (Days 26-50)
- [ ] Dynamic profile pages
- [ ] Advanced search and filtering
- [ ] Admin dashboard
- [ ] File upload system

### Phase 3: AI Integration (Days 51-75)
- [ ] Content generation
- [ ] Smart recommendations  
- [ ] Auto-tagging and categorization
- [ ] Quality assurance workflows

### Phase 4: Launch (Days 76-100)
- [ ] Performance optimization
- [ ] Testing and QA
- [ ] Community features
- [ ] Deployment and monitoring

## 📈 Performance

- **Turbopack:** 5-10x faster builds in development
- **Image Optimization:** Next.js built-in optimization
- **Code Splitting:** Automatic route-based splitting
- **Edge Functions:** Serverless API routes

## 🤝 Contributing

We welcome contributions! See our [Contributing Guide](CONTRIBUTING.md) for details.

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- All the extraordinary women whose stories we preserve
- The open-source community powering our tech stack
- Contributors and beta testers shaping the platform

## 🔗 Links

- **Live Demo:** [Coming Soon]
- **Documentation:** [Coming Soon]
- **Community:** [Coming Soon]

---

**"Well-behaved women seldom make history."** - Laurel Thatcher Ulrich

*ViragoVOX celebrates the women who dared to be extraordinary.*
