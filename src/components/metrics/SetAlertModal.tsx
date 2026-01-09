import { useForm } from "react-hook-form";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";

interface SetAlertModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    onSetAlert: (alert: any) => void;
}

const SetAlertModal = ({ open, onOpenChange, onSetAlert }: SetAlertModalProps) => {
    const { register, handleSubmit, setValue, reset, watch } = useForm({
        defaultValues: {
            metricName: "",
            value: "",
            enabled: true,
            condition: "above"
        } as any
    });

    const onSubmit = (data: any) => {
        onSetAlert(data);
        reset();
        onOpenChange(false);
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Configurar Alerta</DialogTitle>
                    <DialogDescription>
                        Receba notificações quando suas métricas atingirem valores específicos.
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 py-4">
                    <div className="space-y-2">
                        <Label htmlFor="metricName">Métrica</Label>
                        <Select onValueChange={(val: string) => setValue("metricName", val)}>
                            <SelectTrigger>
                                <SelectValue placeholder="Selecione a métrica" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Pressão Arterial">Pressão Arterial</SelectItem>
                                <SelectItem value="Glicemia">Glicemia</SelectItem>
                                <SelectItem value="Freqüência Cardíaca">Freqüência Cardíaca</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label>Condição</Label>
                            <Select defaultValue="above" onValueChange={(val: string) => setValue("condition", val)}>
                                <SelectTrigger>
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="above">Acima de</SelectItem>
                                    <SelectItem value="below">Abaixo de</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="value">Valor Limite</Label>
                            <Input id="value" {...register("value")} placeholder="Ex: 140" />
                        </div>
                    </div>

                    <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="space-y-0.5">
                            <Label>Notificação Ativa</Label>
                            <p className="text-xs text-muted-foreground italic">Enviar para celular e email</p>
                        </div>
                        <Switch
                            checked={watch("enabled")}
                            onCheckedChange={(val: boolean) => setValue("enabled", val)}
                        />
                    </div>

                    <DialogFooter>
                        <Button type="submit">Salvar Alerta</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default SetAlertModal;
