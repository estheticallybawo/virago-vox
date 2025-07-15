// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
"use client"
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import * as echarts from 'echarts';
import { FaArrowLeft } from 'react-icons/fa';

const ProfilePage = () => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [activeTab, setActiveTab] = useState("early-life");
  const [showShareOptions, setShowShareOptions] = useState(false);

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  const handleShare = () => {
    setShowShareOptions(!showShareOptions);
  };

  React.useEffect(() => {
    const chartDom = document.getElementById('timeline-chart');
    if (chartDom) {
      const myChart = echarts.init(chartDom);
      
      const option = {
        animation: false,
        tooltip: {
          trigger: 'axis',
          formatter: function (params) {
            return `<div class="font-medium">${params[0].data[0]}</div>
                    <div>${params[0].data[1]}</div>`;
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          top: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'time',
          axisLine: {
            lineStyle: {
              color: '#ddd'
            }
          },
          axisLabel: {
            formatter: '{yyyy}'
          }
        },
        yAxis: {
          type: 'category',
          data: ['Events'],
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show: false
          }
        },
        series: [
          {
            name: 'Events',
            type: 'scatter',
            symbolSize: 20,
            data: [
              ['1914', 'Born in Vienna, Austria-Hungary'],
              ['1933', 'Married Friedrich Mandl'],
              ['1937', 'Escaped to London'],
              ['1938', 'Signed contract with MGM'],
              ['1940', 'Starred in "Comrade X" and "Boom Town"'],
              ['1941', 'Co-invented frequency hopping technology'],
              ['1942', 'Patent granted for Secret Communication System'],
              ['1960', 'Received star on Hollywood Walk of Fame'],
              ['2000', 'Passed away in Florida, USA'],
              ['2014', 'Inducted into National Inventors Hall of Fame']
            ],
            itemStyle: {
              color: '#9333ea'
            }
          }
        ]
      };

      myChart.setOption(option);
      
      window.addEventListener('resize', () => {
        myChart.resize();
      });
      
      return () => {
        window.removeEventListener('resize', () => {
          myChart.resize();
        });
        myChart.dispose();
      };
    }
  }, []);

  const relatedWomen = [
    {
      id: 1,
      name: "Marie Curie",
      period: "1867-1934",
      connection: "Fellow female scientist who broke barriers in male-dominated fields",
      image: "./Marie.jpg"
    },
    {
      id: 2,
      name: "Grace Hopper",
      period: "1906-1992",
      connection: "Pioneer in computer programming who developed early compiler technology",
      image: "./GraceHopper.jpg"
    },
    {
      id: 3,
      name: "Ada Lovelace",
      period: "1815-1852",
      connection: "First computer programmer who envisioned computing beyond calculations",
      image: "./AdaLovelace.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header & Navigation */}
      <header className="border-b border-gray-100 bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <a href="./home" className="flex items-center cursor-pointer">
              <FaArrowLeft className="fa-solid fa-arrow-left mr-3 text-purple-600"/>
              <h1 className="text-3xl font-serif font-bold bg-gradient-to-r from-purple-600 via-purple-500 to-teal-500 bg-clip-text text-transparent">
                ViragoVOX
              </h1>
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="!rounded-button cursor-pointer" onClick={handleShare}>
              <i className="fa-solid fa-share-nodes text-gray-700"></i>
            </Button>
            <Button variant="ghost" size="icon" className="!rounded-button cursor-pointer" onClick={handleBookmark}>
              <i className={`fa-${isBookmarked ? 'solid' : 'regular'} fa-bookmark text-gray-700`}></i>
            </Button>
            <Button variant="ghost" size="icon" className="!rounded-button cursor-pointer">
              <i className="fa-solid fa-user text-gray-700"></i>
            </Button>
          </div>
        </div>
        {showShareOptions && (
          <div className="absolute right-4 top-16 bg-white shadow-lg rounded-lg p-4 z-50 w-64 border border-gray-100">
            <h4 className="text-sm font-medium text-gray-700 mb-3">Share this profile</h4>
            <div className="grid grid-cols-4 gap-3">
              <Button variant="ghost" size="icon" className="!rounded-button cursor-pointer">
                <i className="fa-brands fa-twitter text-blue-400"></i>
              </Button>
              <Button variant="ghost" size="icon" className="!rounded-button cursor-pointer">
                <i className="fa-brands fa-facebook text-blue-600"></i>
              </Button>
              <Button variant="ghost" size="icon" className="!rounded-button cursor-pointer">
                <i className="fa-brands fa-linkedin text-blue-700"></i>
              </Button>
              <Button variant="ghost" size="icon" className="!rounded-button cursor-pointer">
                <i className="fa-solid fa-envelope text-gray-600"></i>
              </Button>
            </div>
            <Separator className="my-3" />
            <div className="relative">
              <input 
                type="text" 
                value="https://theviragavox.com/profile/hedy-lamarr" 
                className="w-full pr-10 pl-3 py-2 text-sm border rounded-md border-gray-300"
                readOnly
              />
              <Button variant="ghost" size="icon" className="absolute right-1 top-1/2 transform -translate-y-1/2 h-6 w-6 !rounded-button cursor-pointer">
                <i className="fa-solid fa-copy text-gray-500 text-xs"></i>
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Banner */}
      <section className="relative h-[500px] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://readdy.ai/api/search-image?query=Elegant%2520portrait%2520of%2520Hedy%2520Lamarr%2520with%2520dramatic%2520lighting%252C%2520glamorous%25201940s%2520Hollywood%2520style%252C%2520dark%2520background%2520with%2520soft%2520gradient%2520to%2520purple%2520on%2520left%2520side%252C%2520professional%2520studio%2520lighting%252C%2520high%2520contrast%252C%2520cinematic%2520quality%252C%2520showing%2520her%2520beauty%2520and%2520intelligence%252C%2520vintage%2520film%2520star%2520aesthetic&width=1440&height=500&seq=8&orientation=landscape"
            alt="Hedy Lamarr portrait"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 via-purple-800/70 to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 h-full relative z-10">
          <div className="flex flex-col justify-end h-full pb-12">
            <div className="max-w-2xl text-white">
              <div className="flex items-center mb-2">
                <Badge className="bg-purple-500 text-white border-none mr-2">Verified Profile</Badge>
                <Badge className="bg-amber-500 text-white border-none">Featured</Badge>
              </div>
              <h1 className="text-5xl md:text-6xl font-serif font-bold mb-2">
                Hedy Lamarr
              </h1>
              <p className="text-xl text-white/90 mb-3">1914 - 2000</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="outline" className="bg-white/10 text-white border-white/20">
                  Science
                </Badge>
                <Badge variant="outline" className="bg-white/10 text-white border-white/20">
                  Technology
                </Badge>
                <Badge variant="outline" className="bg-white/10 text-white border-white/20">
                  Entertainment
                </Badge>
                <Badge variant="outline" className="bg-white/10 text-white border-white/20">
                  Invention
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Quick Info */}
          <div className="lg:col-span-1">
            <Card className="p-6 mb-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">At a Glance</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-1">Born</h3>
                  <p className="text-gray-900">November 9, 1914 in Vienna, Austria-Hungary</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-1">Died</h3>
                  <p className="text-gray-900">January 19, 2000 (aged 85) in Casselberry, Florida, USA</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-1">Birth Name</h3>
                  <p className="text-gray-900">Hedwig Eva Maria Kiesler</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-1">Nationality</h3>
                  <p className="text-gray-900">Austrian-American</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-1">Known For</h3>
                  <ul className="list-disc list-inside text-gray-900">
                    <li>Co-inventing frequency-hopping spread spectrum technology</li>
                    <li>Hollywood film career spanning 28 films</li>
                    <li>Being marketed as "The Most Beautiful Woman in the World"</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-1">Awards & Recognition</h3>
                  <ul className="list-disc list-inside text-gray-900">
                    <li>Star on the Hollywood Walk of Fame (1960)</li>
                    <li>Electronic Frontier Foundation Pioneer Award (1997)</li>
                    <li>Inducted into the National Inventors Hall of Fame (2014, posthumously)</li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 flex flex-col space-y-3">
                <Button className="bg-purple-600 hover:bg-purple-700 text-white !rounded-button whitespace-nowrap cursor-pointer">
                  <i className="fa-solid fa-plus mr-2"></i> Contribute Information
                </Button>
                <Button variant="outline" className="border-purple-200 text-purple-700 hover:bg-purple-50 !rounded-button whitespace-nowrap cursor-pointer">
                  <i className="fa-solid fa-download mr-2"></i> Download Biography
                </Button>
              </div>
            </Card>

            <Card className="p-6 mb-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Historical Context</h2>
              <div className="space-y-3 text-gray-700">
                <p>Hedy Lamarr lived through significant global events including:</p>
                <ul className="list-disc list-inside">
                  <li>World War I (1914-1918)</li>
                  <li>The Great Depression (1929-1939)</li>
                  <li>World War II (1939-1945)</li>
                  <li>The Cold War (1947-1991)</li>
                  <li>The rise of computing and telecommunications</li>
                </ul>
                <p className="mt-3">Her invention came during WWII, when she sought to help the Allied forces by creating a jam-proof radio guidance system for torpedoes.</p>
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Sources & Citations</h2>
              <ScrollArea className="h-[200px] pr-4">
                <div className="space-y-4">
                  <div>
                    <p className="text-gray-900 font-medium">Rhodes, Richard (2012)</p>
                    <p className="text-gray-700 text-sm">Hedy's Folly: The Life and Breakthrough Inventions of Hedy Lamarr. Doubleday.</p>
                  </div>
                  <div>
                    <p className="text-gray-900 font-medium">Shearer, Stephen Michael (2010)</p>
                    <p className="text-gray-700 text-sm">Beautiful: The Life of Hedy Lamarr. Thomas Dunne Books.</p>
                  </div>
                  <div>
                    <p className="text-gray-900 font-medium">Barton, Ruth (2010)</p>
                    <p className="text-gray-700 text-sm">Hedy Lamarr: The Most Beautiful Woman in Film. University Press of Kentucky.</p>
                  </div>
                  <div>
                    <p className="text-gray-900 font-medium">U.S. Patent 2,292,387</p>
                    <p className="text-gray-700 text-sm">"Secret Communication System" by Hedy K. Markey and George Antheil, August 11, 1942.</p>
                  </div>
                  <div>
                    <p className="text-gray-900 font-medium">National Inventors Hall of Fame</p>
                    <p className="text-gray-700 text-sm">Hedy Lamarr Induction (2014). Official citation and biography.</p>
                  </div>
                  <div>
                    <p className="text-gray-900 font-medium">Bombshell: The Hedy Lamarr Story (2017)</p>
                    <p className="text-gray-700 text-sm">Documentary film directed by Alexandra Dean.</p>
                  </div>
                </div>
              </ScrollArea>
              <div className="mt-4">
                <Button variant="outline" className="w-full border-gray-200 text-gray-700 hover:bg-gray-50 !rounded-button whitespace-nowrap cursor-pointer">
                  <i className="fa-solid fa-book mr-2"></i> View All Sources
                </Button>
              </div>
            </Card>
          </div>

          {/* Right Column - Main Content */}
          <div className="lg:col-span-2">
            <Card className="p-6 mb-6">
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">Biography</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Hedy Lamarr was an Austrian-American actress and inventor whose remarkable life spanned Hollywood glamour and groundbreaking scientific innovation. Beyond her silver screen fame, she co-invented a frequency-hopping spread spectrum technology that formed the foundation for secure military communications and later wireless technologies like Bluetooth, GPS, and Wi-Fi.
              </p>
              
              <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-4 mb-6">
                  <TabsTrigger value="early-life">Early Life</TabsTrigger>
                  <TabsTrigger value="career">Career</TabsTrigger>
                  <TabsTrigger value="invention">Invention</TabsTrigger>
                  <TabsTrigger value="legacy">Legacy</TabsTrigger>
                </TabsList>
                
                <TabsContent value="early-life" className="space-y-4">
                  <div className="flex flex-col md:flex-row gap-6 mb-4">
                    <div className="md:w-2/3">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Childhood & Education</h3>
                      <p className="text-gray-700 mb-4">
                        Born Hedwig Eva Maria Kiesler on November 9, 1914, in Vienna, Austria-Hungary, Hedy was the only child of assimilated Jewish parents. Her father, Emil Kiesler, was a successful bank director, and her mother, Gertrud "Trude" Kiesler (née Lichtwitz), was a pianist.
                      </p>
                      <p className="text-gray-700 mb-4">
                        Hedy showed early signs of exceptional intelligence and was fascinated by how things worked. As a child, she would take apart and reassemble music boxes to understand their mechanisms. Her father encouraged her curiosity about the world and often explained to her how various technologies functioned.
                      </p>
                      <p className="text-gray-700">
                        She received a privileged education at a private school in Vienna, where she excelled in mathematics and sciences. By her teenage years, her striking beauty had already begun to attract attention, and she began acting in Austrian films while still in her teens.
                      </p>
                    </div>
                    <div className="md:w-1/3">
                      <img 
                        src="https://readdy.ai/api/search-image?query=Historical%2520photograph%2520of%2520Vienna%2520Austria%2520in%2520the%25201920s%252C%2520elegant%2520architecture%252C%2520city%2520streets%252C%2520vintage%2520cars%252C%2520people%2520in%2520period%2520clothing%252C%2520black%2520and%2520white%2520photograph%252C%2520historical%2520context%252C%2520cultural%2520setting%252C%2520European%2520capital%2520cityscape&width=400&height=500&seq=13&orientation=portrait"
                        alt="Vienna in the 1920s" 
                        className="w-full h-auto rounded-lg shadow-md object-cover object-top"
                      />
                      <p className="text-sm text-gray-500 mt-2 italic text-center">Vienna, Austria in the 1920s where Hedy spent her childhood</p>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">First Marriage & Escape</h3>
                    <p className="text-gray-700 mb-4">
                      At 19, Hedy married Friedrich Mandl, a wealthy Austrian military arms merchant and munitions manufacturer who was 15 years her senior. Mandl was extremely controlling and possessive, keeping Hedy virtually a prisoner in their castle home, Schloss Schwarzenau.
                    </p>
                    <p className="text-gray-700 mb-4">
                      During her marriage to Mandl, Hedy was exposed to applied science and military technology through her husband's business meetings with scientists and military officials. These discussions about weapons systems and control mechanisms would later influence her own inventive work.
                    </p>
                    <p className="text-gray-700">
                      In 1937, Hedy orchestrated a daring escape from her controlling husband. She disguised herself as her maid, drugged the maid, and fled to Paris. From there, she made her way to London, where she met Louis B. Mayer, the head of MGM Studios, who offered her a Hollywood contract.
                    </p>
                  </div>
                </TabsContent>
                
                <TabsContent value="career" className="space-y-4">
                  <div className="flex flex-col md:flex-row gap-6 mb-4">
                    <div className="md:w-2/3">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Hollywood Stardom</h3>
                      <p className="text-gray-700 mb-4">
                        Upon arriving in Hollywood in 1938, Mayer promoted her as "the world's most beautiful woman" and gave her the stage name Hedy Lamarr. Her first American film, "Algiers" (1938) with Charles Boyer, was a huge success and launched her Hollywood career.
                      </p>
                      <p className="text-gray-700 mb-4">
                        Throughout the 1940s, Lamarr starred in numerous films including "Boom Town" (1940) with Clark Gable and Spencer Tracy, "Comrade X" (1940) with Gable, "White Cargo" (1942), and Cecil B. DeMille's "Samson and Delilah" (1949), which became the highest-grossing film of that year.
                      </p>
                      <p className="text-gray-700">
                        Despite her success, Lamarr was often frustrated by the limited, one-dimensional roles she was offered that focused primarily on her beauty rather than her acting abilities or intelligence. She once famously said, "Any girl can be glamorous. All you have to do is stand still and look stupid."
                      </p>
                    </div>
                    <div className="md:w-1/3">
                      <img 
                        src="https://readdy.ai/api/search-image?query=1940s%2520Hollywood%2520film%2520set%252C%2520vintage%2520movie%2520cameras%252C%2520bright%2520studio%2520lights%252C%2520directors%2520and%2520crew%2520members%2520in%2520period%2520clothing%252C%2520golden%2520age%2520of%2520cinema%252C%2520professional%2520film%2520production%252C%2520historical%2520context%252C%2520entertainment%2520industry%252C%2520black%2520and%2520white%2520photograph&width=400&height=500&seq=14&orientation=portrait"
                        alt="1940s Hollywood film set" 
                        className="w-full h-auto rounded-lg shadow-md object-cover object-top"
                      />
                      <p className="text-sm text-gray-500 mt-2 italic text-center">A typical Hollywood film set during the 1940s</p>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Later Career & Business Ventures</h3>
                    <p className="text-gray-700 mb-4">
                      By the 1950s, Lamarr's film career began to decline. Her last major American film was "The Female Animal" (1958). After leaving Hollywood, she attempted various business ventures, including a failed attempt to create a chain of boutiques.
                    </p>
                    <p className="text-gray-700 mb-4">
                      Throughout her life, Lamarr was married and divorced six times. Her marriages included hotel magnate Howard Lee and actor John Loder, with whom she had two children, Denise and Anthony. She also adopted a son, James, during her marriage to W. Howard Lee.
                    </p>
                    <p className="text-gray-700">
                      In her later years, Lamarr lived a reclusive life in Florida. She maintained contact with her children but largely withdrew from public life. She refused most interview requests and rarely made public appearances.
                    </p>
                  </div>
                </TabsContent>
                
                <TabsContent value="invention" className="space-y-4">
                  <div className="flex flex-col md:flex-row gap-6 mb-4">
                    <div className="md:w-2/3">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">The Secret Communication System</h3>
                      <p className="text-gray-700 mb-4">
                        During World War II, Lamarr learned that radio-controlled torpedoes could be jammed and set off course. Drawing on her knowledge from her first husband's business meetings, she conceived of a frequency-hopping system that would make it difficult for enemies to detect or jam signals to torpedoes.
                      </p>
                      <p className="text-gray-700 mb-4">
                        In 1940, Lamarr met composer George Antheil at a dinner party. She shared her idea with him, and they began collaborating. Antheil's expertise with player pianos helped them develop a miniaturized player-piano mechanism that could change radio frequencies.
                      </p>
                      <p className="text-gray-700">
                        On August 11, 1942, U.S. Patent 2,292,387 was granted to Hedy Kiesler Markey (her married name at the time) and George Antheil for their "Secret Communication System." The technology used a piano roll to change between 88 frequencies and was intended to make radio-guided torpedoes harder for enemies to detect or jam.
                      </p>
                    </div>
                    <div className="md:w-1/3">
                      <img 
                        src="https://readdy.ai/api/search-image?query=Technical%2520drawing%2520of%2520frequency%2520hopping%2520spread%2520spectrum%2520technology%252C%2520patent%2520diagram%2520style%252C%2520detailed%2520schematic%252C%2520engineering%2520blueprint%252C%2520radio%2520wave%2520patterns%252C%2520communication%2520system%2520design%252C%2520technical%2520illustration%252C%2520vintage%2520patent%2520document%2520aesthetic%252C%2520scientific%2520visualization&width=400&height=500&seq=15&orientation=portrait"
                        alt="Patent diagram" 
                        className="w-full h-auto rounded-lg shadow-md object-cover object-top"
                      />
                      <p className="text-sm text-gray-500 mt-2 italic text-center">Conceptual representation of the frequency-hopping technology</p>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Military Response & Later Recognition</h3>
                    <p className="text-gray-700 mb-4">
                      Despite its innovative nature, the U.S. Navy did not adopt Lamarr and Antheil's invention during World War II. Military officials told her she could better serve the war effort as a celebrity selling war bonds, which she did enthusiastically, raising $25 million.
                    </p>
                    <p className="text-gray-700 mb-4">
                      The patent expired before the technology could be implemented, but the concept of frequency hopping was later used by the military during the Cuban Missile Crisis in 1962. Subsequently, various forms of the technology were incorporated into Bluetooth, GPS, and Wi-Fi systems.
                    </p>
                    <p className="text-gray-700">
                      It wasn't until the late 1990s that Lamarr began receiving recognition for her technological contributions. In 1997, she was honored with the Electronic Frontier Foundation's Pioneer Award. In 2014, she was posthumously inducted into the National Inventors Hall of Fame.
                    </p>
                  </div>
                </TabsContent>
                
                <TabsContent value="legacy" className="space-y-4">
                  <div className="flex flex-col md:flex-row gap-6 mb-4">
                    <div className="md:w-2/3">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Technological Impact</h3>
                      <p className="text-gray-700 mb-4">
                        Lamarr's frequency-hopping spread spectrum technology laid the groundwork for modern wireless communications. The principles behind her invention are now used in GPS, Bluetooth, Wi-Fi, and CDMA technologies that billions of people rely on daily.
                      </p>
                      <p className="text-gray-700 mb-4">
                        The value of the technology she co-invented is estimated to be worth billions of dollars today. However, because her patent expired before it was widely implemented, Lamarr never received financial compensation for her groundbreaking work.
                      </p>
                      <p className="text-gray-700">
                        In recognition of her technological contributions, Inventors' Day in Austria, her birth country, is celebrated on her birthday, November 9. The day honors her and all inventors for their contributions to society.
                      </p>
                    </div>
                    <div className="md:w-1/3">
                      <img 
                        src="https://readdy.ai/api/search-image?query=Modern%2520wireless%2520technology%2520devices%2520arranged%2520in%2520artistic%2520composition%252C%2520smartphones%252C%2520tablets%252C%2520laptops%2520with%2520wifi%2520symbols%252C%2520bluetooth%2520devices%252C%2520GPS%2520navigation%2520systems%252C%2520professional%2520product%2520photography%252C%2520clean%2520background%252C%2520technological%2520innovation%2520representation%252C%2520contemporary%2520digital%2520ecosystem&width=400&height=500&seq=16&orientation=portrait"
                        alt="Modern wireless technology" 
                        className="w-full h-auto rounded-lg shadow-md object-cover object-top"
                      />
                      <p className="text-sm text-gray-500 mt-2 italic text-center">Modern technologies that evolved from Lamarr's invention</p>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Cultural Legacy & Recognition</h3>
                    <p className="text-gray-700 mb-4">
                      Lamarr's life story has inspired numerous books, documentaries, and films. The 2017 documentary "Bombshell: The Hedy Lamarr Story" brought renewed attention to her scientific contributions and complex life.
                    </p>
                    <p className="text-gray-700 mb-4">
                      She has become an icon for women in STEM fields, symbolizing the often-overlooked contributions of women to science and technology. Various scholarships and programs for women in technology have been named in her honor.
                    </p>
                    <p className="text-gray-700">
                      Lamarr's dual legacy as both a glamorous film star and brilliant inventor has made her a fascinating figure who defied stereotypes and expectations. Her story continues to inspire discussions about gender, innovation, and recognition in both the entertainment industry and scientific community.
                    </p>
                  </div>
                </TabsContent>
              </Tabs>
            </Card>

            <Card className="p-6 mb-6">
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">Timeline of Key Events</h2>
              <div id="timeline-chart" className="w-full h-[300px]"></div>
              <div className="mt-6">
                <Button variant="outline" className="w-full border-gray-200 text-gray-700 hover:bg-gray-50 !rounded-button whitespace-nowrap cursor-pointer">
                  <i className="fa-solid fa-expand mr-2"></i> View Detailed Timeline
                </Button>
              </div>
            </Card>

            <Card className="p-6 mb-6">
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">Image Gallery</h2>
              <Swiper
                modules={[Pagination, Autoplay, Navigation]}
                spaceBetween={16}
                slidesPerView={1}
                breakpoints={{
                  640: { slidesPerView: 2 },
                  768: { slidesPerView: 3 },
                }}
                pagination={{ clickable: true }}
                navigation
                className="pb-10"
              >
                <SwiperSlide>
                  <div className="overflow-hidden rounded-lg shadow-md">
                    <img 
                      src="https://readdy.ai/api/search-image?query=Glamorous%2520Hollywood%2520portrait%2520of%2520Hedy%2520Lamarr%2520in%25201940s%2520style%252C%2520studio%2520lighting%252C%2520professional%2520photography%252C%2520elegant%2520pose%252C%2520classic%2520beauty%252C%2520vintage%2520film%2520star%2520aesthetic%252C%2520black%2520and%2520white%2520photograph%252C%2520detailed%2520facial%2520features%252C%2520iconic%2520image&width=400&height=500&seq=17&orientation=portrait"
                      alt="Hedy Lamarr glamour portrait" 
                      className="w-full h-64 object-cover object-top transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <p className="text-sm text-gray-600 mt-2 text-center">Hollywood glamour portrait, 1940</p>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="overflow-hidden rounded-lg shadow-md">
                    <img 
                      src="https://readdy.ai/api/search-image?query=Hedy%2520Lamarr%2520working%2520on%2520technical%2520drawings%2520at%2520desk%252C%2520concentration%2520on%2520face%252C%2520papers%2520and%2520drafting%2520tools%2520visible%252C%2520inventor%2520at%2520work%252C%2520vintage%2520photograph%2520style%252C%25201940s%2520setting%252C%2520professional%2520lighting%252C%2520historical%2520context%252C%2520scientific%2520process&width=400&height=500&seq=18&orientation=portrait"
                      alt="Hedy Lamarr working on invention" 
                      className="w-full h-64 object-cover object-top transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <p className="text-sm text-gray-600 mt-2 text-center">Working on technical designs, circa 1941</p>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="overflow-hidden rounded-lg shadow-md">
                    <img 
                      src="https://readdy.ai/api/search-image?query=Hedy%2520Lamarr%2520in%2520scene%2520from%2520Samson%2520and%2520Delilah%2520movie%252C%2520elaborate%2520costume%252C%2520dramatic%2520lighting%252C%2520film%2520set%2520environment%252C%2520cinematic%2520quality%252C%2520historical%2520biblical%2520epic%2520style%252C%2520professional%2520movie%2520production%252C%2520iconic%2520film%2520moment%252C%25201949%2520cinema&width=400&height=500&seq=19&orientation=portrait"
                      alt="Hedy Lamarr in Samson and Delilah" 
                      className="w-full h-64 object-cover object-top transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <p className="text-sm text-gray-600 mt-2 text-center">As Delilah in "Samson and Delilah," 1949</p>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="overflow-hidden rounded-lg shadow-md">
                    <img 
                      src="https://readdy.ai/api/search-image?query=US%2520Patent%2520document%2520for%2520Secret%2520Communication%2520System%252C%2520official%2520patent%2520paper%2520with%2520technical%2520drawings%252C%2520signatures%252C%2520and%2520government%2520seals%252C%2520vintage%2520document%2520style%252C%2520historical%2520significance%252C%2520invention%2520record%252C%2520technical%2520diagrams%252C%25201942%2520patent%2520office%2520format&width=400&height=500&seq=20&orientation=portrait"
                      alt="Patent document" 
                      className="w-full h-64 object-cover object-top transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <p className="text-sm text-gray-600 mt-2 text-center">U.S. Patent 2,292,387, issued August 11, 1942</p>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="overflow-hidden rounded-lg shadow-md">
                    <img 
                      src="https://readdy.ai/api/search-image?query=Hedy%2520Lamarr%2520receiving%2520award%2520at%2520ceremony%252C%2520elderly%2520woman%2520with%2520dignified%2520appearance%252C%2520formal%2520event%2520setting%252C%2520recognition%2520moment%252C%2520professional%2520event%2520photography%252C%2520late%25201990s%2520style%252C%2520achievement%2520celebration%252C%2520historical%2520significance%252C%2520emotional%2520moment&width=400&height=500&seq=21&orientation=portrait"
                      alt="Hedy Lamarr receiving award" 
                      className="w-full h-64 object-cover object-top transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <p className="text-sm text-gray-600 mt-2 text-center">Receiving the EFF Pioneer Award, 1997</p>
                </SwiperSlide>
              </Swiper>
            </Card>

            <Card className="p-6">
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">Related Women in Technology & Film</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedWomen.map((woman) => (
                  <Card key={woman.id} className="overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="h-48 overflow-hidden">
                      <img
                        src={woman.image}
                        alt={woman.name}
                        className="w-full h-full object-cover object-top transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-bold text-gray-900 mb-1">{woman.name}</h3>
                      <p className="text-gray-500 text-sm mb-2">{woman.period}</p>
                      <p className="text-gray-700 text-sm mb-3">{woman.connection}</p>
                      <Button variant="link" className="text-teal-600 hover:text-teal-700 p-0 h-auto text-sm !rounded-button whitespace-nowrap cursor-pointer">
                        View profile <i className="fa-solid fa-arrow-right ml-1"></i>
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Community Contribution Section */}
      <section className="py-12 bg-gradient-to-br from-purple-50 via-white to-teal-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-3 text-center">Contribute to This Profile</h2>
            <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
              Have additional information, corrections, or media related to Hedy Lamarr? Help us improve this profile by sharing your knowledge.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="p-6 text-center hover:shadow-md transition-shadow duration-300">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fa-solid fa-file-lines text-purple-600 text-2xl"></i>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Add Information</h3>
                <p className="text-gray-600 text-sm mb-4">Submit additional facts, details, or corrections to enhance this profile.</p>
                <Button variant="outline" className="w-full border-purple-200 text-purple-700 hover:bg-purple-50 !rounded-button whitespace-nowrap cursor-pointer">
                  Submit Facts
                </Button>
              </Card>
              
              <Card className="p-6 text-center hover:shadow-md transition-shadow duration-300">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fa-solid fa-image text-teal-600 text-2xl"></i>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Share Media</h3>
                <p className="text-gray-600 text-sm mb-4">Contribute photographs, documents, or other media related to Hedy Lamarr.</p>
                <Button variant="outline" className="w-full border-teal-200 text-teal-700 hover:bg-teal-50 !rounded-button whitespace-nowrap cursor-pointer">
                  Upload Media
                </Button>
              </Card>
              
              <Card className="p-6 text-center hover:shadow-md transition-shadow duration-300">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fa-solid fa-book text-amber-600 text-2xl"></i>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Add Sources</h3>
                <p className="text-gray-600 text-sm mb-4">Provide citations, references, or links to reliable sources about her life.</p>
                <Button variant="outline" className="w-full border-amber-200 text-amber-700 hover:bg-amber-50 !rounded-button whitespace-nowrap cursor-pointer">
                  Add Citation
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-serif font-bold bg-gradient-to-r from-purple-400 via-purple-300 to-amber-300 bg-clip-text text-transparent mb-4">
                ViragoVOX
              </h3>
              <p className="text-gray-400 mb-4">
                A digital sanctuary preserving and amplifying the voices of women throughout history.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  <i className="fa-brands fa-twitter text-lg"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  <i className="fa-brands fa-instagram text-lg"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  <i className="fa-brands fa-facebook text-lg"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  <i className="fa-brands fa-linkedin text-lg"></i>
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-4">Explore</h4>
              <ul className="space-y-2">
                <li><a href="https://readdy.ai/home/3273abdd-4158-4784-a714-0009314fb341/6b0b0170-2a53-4b20-b4f2-b4548402b0ef" data-readdy="true" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Archive</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Submit a Story</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Weekly Spotlights</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Partnership Opportunities</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">About Our AI</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Research Guidelines</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Editorial Standards</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Submission Tips</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Educational Materials</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-4">Stay Connected</h4>
              <p className="text-gray-400 mb-4">Subscribe to our newsletter for weekly updates on new stories and features.</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="bg-gray-800 border-gray-700 text-white rounded-l-md rounded-r-none border-r-0 px-4 py-2 w-full"
                />
                <Button className="bg-purple-600 hover:bg-purple-700 rounded-l-none !rounded-button whitespace-nowrap cursor-pointer">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
          <Separator className="bg-gray-800 my-6" />
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-500 text-sm mb-4 md:mb-0">
              © 2025 ViragoVOX. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
              <a href="#" className="hover:text-white transition-colors cursor-pointer">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors cursor-pointer">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors cursor-pointer">Cookie Policy</a>
              <a href="#" className="hover:text-white transition-colors cursor-pointer">Accessibility</a>
              <a href="#" className="hover:text-white transition-colors cursor-pointer">Contact Us</a>
            </div>
            <div className="flex items-center mt-4 md:mt-0">
              <span className="text-gray-500 text-sm mr-2">Powered by:</span>
              <i className="fa-solid fa-robot text-purple-400 mr-1"></i>
              <span className="text-gray-400 text-sm">AI Technology</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProfilePage;
