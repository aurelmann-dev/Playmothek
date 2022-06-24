<?php

namespace App\Form;

use App\Entity\Pages;
use App\Entity\Users;
use App\Repository\UsersRepository;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\OptionsResolver\OptionsResolver;

class PagesType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('presentation')
            ->add('networks')
            ->add('user', EntityType::class, [
                'class' => Users::class,
                // choix par le prénom
                'choice_label' => 'firstname',
                // enregistrement de l'id
                'query_builder' => function (UsersRepository $user_id) {
                    return $user_id->createQueryBuilder('id')
                        ->orderBy('id.firstname', 'ASC');
                }
            ])

            ->add('Valider', SubmitType::class);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Pages::class,
        ]);
    }
}
