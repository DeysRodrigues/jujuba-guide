import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function skills() {

    const skillsWeapon = [
        { name: 'Blade Skills', link: '/blade-skills' },
        { name: 'Shot Skills', link: '/shot-skills' },
        { name: 'Magic Skills', link: 'skills/magic-skills' },
        { name: 'Martial Skills', link: '/martial-skills' },
        { name: 'DualSword Skills', link: '/dualsword-skills' },
        { name: 'Halberd Skills', link: '/halberd-skills' },
        { name: 'Mononofu Skills', link: '/mononofu-skills' },
        { name: 'Barehand Skills', link: '/barehand-skills' },
        { name: 'Crusher Skills', link: '/crusher-skills' },
        { name: 'Sprite Skills', link: '/sprite-skills' }

    ];

    const skillsBuff = [
        { name: 'Guard Skills', link: '/guard-skills' },
        { name: 'Shield Skills', link: '/shield-skills' },
        { name: 'Dagger Skills', link: '/dagger-skills' },
        { name: 'Knight Skills', link: '/knight-skills' },
        { name: 'Priest Skills', link: '/priest-skills' },
        { name: 'Assassin Skills', link: '/assassin-skills' },
        { name: 'Wizard Skills', link: '/wizard-skills' },
        { name: 'Hunter Skills', link: '/hunter-skills' },
        { name: 'DarkPower Skills', link: '/darkpower-skills' },
        { name: 'MagicBlade Skills', link: '/magicblade-skills' },
        { name: 'Ninja Skills', link: '/ninja-skills' },
        { name: 'Partisan Skills', link: '/partisan-skills' }
    ];
    const skillsAssist = [
        { name: 'Survival Skills', link: '/guard-skills' },
        { name: 'Suport Skills', link: '/shield-skills' },
        { name: 'Minstrel Skills', link: '/dagger-skills' },
        { name: 'Dancer Skills', link: '/knight-skills' },
        { name: 'Battle Skills', link: '/priest-skills' },

    ];
    const skillsOther = [
        { name: 'Smith Skills', link: '/guard-skills' },
        { name: 'Alchemy Skills', link: '/shield-skills' },
        { name: 'Tamer Skills', link: '/dagger-skills' },
        { name: 'Scroll', link: '/knight-skills' },

    ];
    return (

        <section className="flex flex-col gap-3 m-5">

            <div>
                <Card>
                    <CardHeader>
                        <CardTitle>Weapon</CardTitle>
                        <CardDescription>Skills de armas base</CardDescription>
                    </CardHeader>

                    <CardContent>
                        <div>
                            <ul className="p-2">
                                {skillsWeapon.map((skill, index) => (
                                    <li key={index} className=" p-2">
                                        <Link href={skill.link} className="">
                                            {skill.name}
                                        </Link>
                                    </li>
                                ))}

                            </ul>
                        </div>
                    </CardContent>

                </Card>
            </div>

            <div>
                <Card>
                    <CardHeader>
                        <CardTitle>Buff</CardTitle>
                        <CardDescription>Skills de armas base</CardDescription>
                    </CardHeader>

                    <CardContent>
                        <div>
                            <ul className="p-2">
                                {skillsBuff.map((skill, index) => (
                                    <li key={index} className=" p-2">
                                        <Link href={skill.link}>
                                            {skill.name}
                                        </Link>
                                    </li>
                                ))}

                            </ul>
                        </div>
                    </CardContent>

                </Card>
            </div>

            <div>
                <Card>
                    <CardHeader>
                        <CardTitle>Assist</CardTitle>
                        <CardDescription>Skills de assistencia</CardDescription>
                    </CardHeader>

                    <CardContent>
                        <div>
                            <ul className="p-2">
                                {skillsAssist.map((skill, index) => (
                                    <li key={index} className=" p-2">
                                        <Link href={skill.link}>
                                            {skill.name}
                                        </Link>
                                    </li>
                                ))}

                            </ul>
                        </div>
                    </CardContent>

                </Card>
            </div>

            <div>
                <Card>
                    <CardHeader>
                        <CardTitle>Other</CardTitle>
                        <CardDescription>Skills de assistencia</CardDescription>
                    </CardHeader>

                    <CardContent>
                        <div>
                            <ul className="p-2">
                                {skillsOther.map((skill, index) => (
                                    <li key={index} className=" p-2">
                                        <Link href={skill.link}>
                                            {skill.name}
                                        </Link>
                                    </li>
                                ))}

                            </ul>
                        </div>
                    </CardContent>

                </Card>
            </div>
        </section>



    );

}