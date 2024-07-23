import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChangeEvent, useState } from "react";

interface Filters {
    skillLevel: number;
}

const initialFilters: Filters = {
    skillLevel: 1,
};
type SkillLevelData = {
    skillConstant: number;
    skillMultiplier: number;
    hitCount: number;
};
type Skills = "Magic: Arrows";

type SkillData = Record<Skills, Record<number, SkillLevelData>>;

const skillData: SkillData = {
    "Magic: Arrows": {
        1: { skillConstant: 41, skillMultiplier: 0.96, hitCount: 2 },
        2: { skillConstant: 42, skillMultiplier: 0.98, hitCount: 3 },
        3: { skillConstant: 43, skillMultiplier: 1.00, hitCount: 4 },
        4: { skillConstant: 44, skillMultiplier: 1.02, hitCount: 5 },
        5: { skillConstant: 45, skillMultiplier: 1.04, hitCount: 6 },
        6: { skillConstant: 46, skillMultiplier: 1.06, hitCount: 7 },
        7: { skillConstant: 47, skillMultiplier: 1.08, hitCount: 8 },
        8: { skillConstant: 48, skillMultiplier: 1.10, hitCount: 9 },
        9: { skillConstant: 49, skillMultiplier: 1.12, hitCount: 10 },
        10: { skillConstant: 50, skillMultiplier: 1.14, hitCount: 11 }
    }

};


const MagicArrow = () => {
    const [selectedSkill, setSelectedSkill] = useState<Skills>('Magic: Arrows');
    const [filters, setFilters] = useState<Filters>(initialFilters);

    const handleFilterChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target;

        setFilters((prevFilters) => ({
            ...prevFilters,
            [name]: Number(value)
        }));
    };

    const skillInfo = skillData[selectedSkill][filters.skillLevel];

    return (
        <Card>
            <CardHeader>
                <CardTitle> Magic: Arrows</CardTitle>
                <CardDescription>
                    Atire pequenas flechas mágicas. As setas aumentam à medida que a habilidade aumenta.
                </CardDescription>
                <CardContent className="w-[100%]">
                    <div>
                        <ul>
                            <p><strong>Disponivel: </strong>Todas as armas</p>
                            <li><strong>Type: </strong>Ativo, habilidade Mágica</li>
                            <li><strong>Elemento: </strong>Depende da arma</li>
                            <li><strong>Inicia Combo: </strong>Sim</li>
                            <li><strong>Meio de Combo: </strong>Sim</li>
                            <div>
                                <li><strong>MP: </strong>100</li>
                                <li><strong>Range: </strong>12</li>
                                <li><strong>MP: </strong>100</li>
                            </div>
                        </ul>
                    </div>
                    <Tabs defaultValue="account" className="">
                        <TabsList className="grid w-full grid-cols-2 gap-3">
                            <TabsTrigger value="staf">Staf</TabsTrigger>
                            <TabsTrigger value="md">MD</TabsTrigger>
                        </TabsList>
                        <TabsContent value="staf">
                            <div>
                                <div className="bg-slate-50 p-2 flex flex-col">
                                    <label>
                                        Skill Level:
                                        <select
                                            name="skillLevel"
                                            value={filters.skillLevel}
                                            onChange={handleFilterChange}
                                        >
                                            {Array.from({ length: 10 }, (_, i) => i + 1).map(level => (
                                                <option key={level} value={level}>{level}</option>
                                            ))}
                                        </select>
                                    </label>
                                </div>
                                <div>
                                    <ul>
                                        <li><strong>Constante de habilidade:  </strong> {skillInfo.skillConstant}</li>
                                        <li><strong>Multiplicador de habilidades:  </strong> {skillInfo.skillMultiplier}</li>
                                        <li><strong>Contagem de acertos: </strong> {skillInfo.hitCount}</li>
                                        <li><strong>Cast Time:  </strong> 2 segundos (afetados pelo CSPD)</li>
                                        <li>Subsídios Chain Cast buff após ativação se Elenco Corrente foi aprendido</li>
                                        <li></li>
                                    </ul>
                                    <div>
                                        <Accordion type="single" collapsible className="w-full">
                                            <AccordionItem value="item-1">
                                                <AccordionTrigger><strong>Extra info:</strong></AccordionTrigger>
                                                <AccordionContent>
                                                    <li>Esta habilidade é afetada por Concentrar, Passivo de longo alcance, Dano de curto alcance e Dano de longo alcance estatísticas</li>
                                                    <li>Tal como acontece com a maioria das outras habilidades de "lingering", se Magia: Flechas é reformulado enquanto o anterior Magia: Flechas ainda está ativo, este último será removido e todos os seus sucessos restantes serão cancelados</li>
                                                    <li>Magia: Flechas a animação de nome e efeito mudará dependendo do seu elemento:
                                                        <br />
                                                        - Neutro: Magia: Flechas <br />
                                                        - Fogo: Flechas Fogo <br />
                                                        - Água: Flechas Água  <br />
                                                        - Vento: Flechas Vento <br />
                                                        - Terra: Terra Setas <br />
                                                        - Luz: Setas Luz <br />
                                                        - Escuro: Setas Escuras <br />
                                                        Essas mudanças visuais são puramente estéticas e não têm outro impacto na jogabilidade.</li>
                                                </AccordionContent>
                                            </AccordionItem>
                                        </Accordion>

                                    </div>
                                </div>
                            </div>
                        </TabsContent>
                    </Tabs>
                </CardContent>
            </CardHeader>
        </Card>
    );
};

export default MagicArrow;